"use server";

import { createClient } from "@/core/supabase/client";

export async function askAction(
  _: "ok" | "error" | null,
  formData: FormData
): Promise<"ok" | "error"> {
  const { data } = await createClient()
    .from("question")
    .insert({ text: formData.get("question") })
    .select();

  if (!data) return "error";

  return "ok";
}
