// supabaseClient.js
import { config } from 'dotenv';
config();

import { createClient } from '@supabase/supabase-js'

const NEXT_PUBLIC_SUPABASE_URL = 'https://fcomxjxmrsfguyiumaoc.supabase.co'
const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )