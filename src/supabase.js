import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and API key
const supabaseUrl = 'https://kujizzphqeehhwctijiy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1aml6enBocWVlaGh3Y3Rpaml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNDUyMDAsImV4cCI6MjA0NzYyMTIwMH0.zdf3Yr5UvTHO_3Pn6r6ygEDgfckNbVvUbfPs0Mol9lU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
