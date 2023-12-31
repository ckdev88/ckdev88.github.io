import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
// TODO: remove or use, works only locally
// await supabase
//   .rpc('count_visits', {
//     url: 'asdasd.href'
//   }).single();

export default supabase;
