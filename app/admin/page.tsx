import { redirect } from "next/navigation";

import { createClient } from "@/core/supabase/server";

import type { Message } from "./types";
import { Messages } from "./components/Messages";

export default async function Admin() {
  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) redirect("/auth");
  const { data } = await supabase.from("question").select("*");

  return <Messages messages={data as Message[]} />;
}
