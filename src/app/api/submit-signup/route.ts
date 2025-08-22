import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getNextId, appendSignupRow } from '@/utils/googleSheets';
import { supabase, type WaitlistEntry } from '@/utils/supabase';

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bodySchema.parse(body);

    console.log(`[SIGNUP] Processing signup for: ${parsed.email}`);

    // Post to both Google Sheets and Supabase simultaneously
    // We'll wait for at least one to succeed
    const googleSheetsPromise = (async () => {
      try {
        console.log(
          `[SIGNUP] Starting Google Sheets insert for: ${parsed.email}`
        );
        const nextId = await getNextId();
        await appendSignupRow(nextId, parsed.name, parsed.email);
        console.log(`[SIGNUP] Google Sheets success for: ${parsed.email}`);
        return { success: true, service: 'googleSheets' };
      } catch (error) {
        console.error(
          `[SIGNUP] Google Sheets error for ${parsed.email}:`,
          error
        );
        return { success: false, service: 'googleSheets', error };
      }
    })();

    const supabasePromise = (async () => {
      try {
        console.log(`[SIGNUP] Starting Supabase insert for: ${parsed.email}`);
        const waitlistEntry: WaitlistEntry = {
          name: parsed.name,
          email: parsed.email,
        };

        const { error, data } = await supabase
          .from('Waitlist')
          .insert([waitlistEntry])
          .select();

        if (error) {
          console.error(`[SIGNUP] Supabase error for ${parsed.email}:`, {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code,
          });
          return { success: false, service: 'supabase', error };
        }

        console.log(`[SIGNUP] Supabase success for: ${parsed.email}`, data);
        return { success: true, service: 'supabase', data };
      } catch (error) {
        console.error(`[SIGNUP] Supabase catch error for ${parsed.email}:`, {
          message: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined,
          error,
        });
        return { success: false, service: 'supabase', error };
      }
    })();

    // Wait for both promises to complete and check results
    const [googleSheetsResult, supabaseResult] = await Promise.allSettled([
      googleSheetsPromise,
      supabasePromise,
    ]);

    // Log results
    const gsResult =
      googleSheetsResult.status === 'fulfilled'
        ? await googleSheetsResult.value
        : null;
    const sbResult =
      supabaseResult.status === 'fulfilled' ? await supabaseResult.value : null;

    console.log(`[SIGNUP] Results for ${parsed.email}:`, {
      googleSheets: gsResult,
      supabase: sbResult,
    });

    // Consider it successful if at least one service succeeded
    const hasSuccess = gsResult?.success || sbResult?.success;

    if (!hasSuccess) {
      console.error(`[SIGNUP] Both services failed for ${parsed.email}`);
      // Still return success to the user, but log the failures for monitoring
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('[SIGNUP] Submit signup error:', {
      message: err?.message,
      stack: err?.stack,
      issues: err?.issues,
      error: err,
    });

    if (err?.issues) {
      return NextResponse.json(
        { success: false, message: 'Invalid input' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
