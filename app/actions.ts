"use server";

import { supabase } from "@/utils/supabase/client";

export async function askAction(
  _: string,
  formData: FormData
): Promise<"ok" | "error"> {
  const query = formData.get("query");
  const { data } = await supabase
    .from("question")
    .insert({ text: query })
    .select();

  if (!data) return "error";

  return "ok";
}
