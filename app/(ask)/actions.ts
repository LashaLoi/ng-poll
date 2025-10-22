"use server";

import { createMessage } from "@/core/api";

export async function askAction(_: "ok" | "error" | null, formData: FormData) {
  const text = formData.get("question")?.toString() ?? "";
  const isOk = await createMessage(text);

  if (!isOk) return "error";

  return "ok";
}
