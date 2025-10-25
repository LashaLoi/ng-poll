"use server";

import { redirect } from "next/navigation";

import { signIn } from "@/core/api";

export async function sendPassword(_prevState: unknown, formData: FormData) {
  const password = formData.get("password")?.toString() ?? "";
  const isOk = await signIn(password);

  if (!isOk) return "error";

  redirect("/admin");
}
