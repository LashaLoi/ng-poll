"use server";

import { supabase } from "@/utils/supabase/client";

export async function askRequest(text: string): Promise<"ok" | "error"> {
  const { data } = await supabase.from("question").insert({ text }).select();

  if (!data) return "error";

  return "ok";
}
