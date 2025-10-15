import { redirect } from "next/navigation";

import { createClient } from "@/core/supabase/server";

import { Messages } from "./components/messages";

import type { Message } from "./types";

export default async function Admin() {
  const client = await createClient();
  const { data: authData } = await client.auth.getUser();

  if (!authData.user) redirect("/auth");
  const { data: messages } = await client
    .from("question")
    .select("*")
    .overrideTypes<Message[]>();

  return <Messages messages={messages ?? []} />;
}
