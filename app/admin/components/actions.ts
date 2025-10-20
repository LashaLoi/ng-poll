"use server";

import { createClient } from "@/core/supabase/server";

export const deleteMessageAction = async (id: number) => {
  const client = await createClient();

  try {
    await client.from("question").delete().eq("id", id);

    return "ok";
  } catch {
    return "error";
  }
};
