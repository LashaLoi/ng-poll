import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Questions } from "./components/Questions";

import type { Message } from "./types";

export default async function Admin() {
  const supabase = await createClient();
  const { data } = await supabase.from("question").select("*");
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) redirect("/auth");

  return <Questions messages={data as Message[]} />;
}
