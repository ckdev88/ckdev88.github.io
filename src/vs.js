// TODO: need to be either cleaned up or used, also see pages/nl/index.astro
import supabase from "./supabase";
const currentUrl = "NLLLLL";
await supabase
  .rpc("count_visits", {
    url: currentUrl,
  })
  .single();
