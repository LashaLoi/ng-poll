"use server";

import { createClient } from "@/core/supabase/server";

export async function askAction(
  _: "ok" | "error" | null,
  formData: FormData
): Promise<"ok" | "error"> {
  const client = await createClient();
  const { data } = await client
    .from("question")
    .insert({ text: formData.get("question") })
    .select();

  if (!data) return "error";

  return "ok";
}
