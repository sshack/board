import { createClient } from '@supabase/supabase-js';

// Use server-side environment variables with service role key for backend operations
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Supabase environment variables check:', {
    supabaseUrl: supabaseUrl ? 'present' : 'missing',
    supabaseServiceRoleKey: supabaseServiceRoleKey ? 'present' : 'missing',
    NODE_ENV: process.env.NODE_ENV,
  });
  throw new Error(
    'Missing Supabase environment variables (URL or SERVICE_ROLE_KEY)'
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    persistSession: false, // Disable session persistence for server-side usage
  },
});

export type WaitlistEntry = {
  id?: number;
  created_at?: string;
  name: string;
  email: string;
};
