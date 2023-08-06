
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wfkhwfokpqeqiibfhigd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indma2h3Zm9rcHFlcWlpYmZoaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMzc3MDEsImV4cCI6MjAwNTcxMzcwMX0.T6HFLhxPCUyBcKtvZlLeGI4v3qMsoaCw0umXQhTi8bU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;