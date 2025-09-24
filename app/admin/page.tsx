import { redirect } from "next/navigation";

import { createClient } from "@/core/supabase/server";

import { Messages } from "./components/questions";

import type { Message } from "./types";

export default async function Admin() {
  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData.user) redirect("/auth");
  const { data: messages } = await supabase
    .from("question")
    .select("*")
    .overrideTypes<Message[]>();

  return <Messages messages={messages ?? []} />;
}
