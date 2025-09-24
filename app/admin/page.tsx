import { redirect } from "next/navigation";

import { createClient } from "@/core/supabase/server";

import type { Message } from "./types";
import { Messages } from "./components/Messages";

export default async function Admin() {
  const supabase = await createClient();
  const { data } = await supabase.from("question").select("*");
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) redirect("/auth");

  return <Messages messages={data as Message[]} />;
}
