"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/core/supabase/server";

export async function sendPassword(_prevState: unknown, formData: FormData) {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithPassword({
    email: "test@email.com",
    password: formData.get("password")?.toString() ?? "",
  });

  if (!data.user) return "error";

  redirect("/admin");
}
