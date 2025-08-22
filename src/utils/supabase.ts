import { createClient } from '@supabase/supabase-js';

// Use server-side environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables check:', {
    supabaseUrl: supabaseUrl ? 'present' : 'missing',
    supabaseAnonKey: supabaseAnonKey ? 'present' : 'missing',
    NODE_ENV: process.env.NODE_ENV,
  });
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
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
