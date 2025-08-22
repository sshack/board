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

    // Post to both Google Sheets and Supabase simultaneously
    // We don't wait for responses, just fire and forget
    const googleSheetsPromise = (async () => {
      try {
        const nextId = await getNextId();
        await appendSignupRow(nextId, parsed.name, parsed.email);
      } catch (error) {
        console.error('Google Sheets error:', error);
      }
    })();

    const supabasePromise = (async () => {
      try {
        const waitlistEntry: WaitlistEntry = {
          name: parsed.name,
          email: parsed.email,
        };

        const { error } = await supabase
          .from('Waitlist')
          .insert([waitlistEntry]);

        if (error) {
          console.error('Supabase error:', error);
        }
      } catch (error) {
        console.error('Supabase error:', error);
      }
    })();

    // Fire both requests but don't wait for them
    googleSheetsPromise;
    supabasePromise;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Submit signup error', err);

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
