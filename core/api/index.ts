import { createClient } from "@/core/api/supabase/server";

import type { SupabaseClient } from "@supabase/supabase-js";

export type Message = {
  id: number;
  created_at: string;
  text: string;
};

export let client: SupabaseClient;

export const initializeClient = async () => {
  client = await createClient();
};

export const getMe = async () => {
  await initializeClient();

  const { data } = await client.auth.getUser();
  return data.user;
};

export const signIn = async (password: string) => {
  await initializeClient();

  const { data } = await client.auth.signInWithPassword({
    email: "test@email.com",
    password,
  });

  return Boolean(data.user);
};

export const createMessage = async (text: string) => {
  if (!client) await initializeClient();

  const { data } = await client
    .from("question")
    .insert({ text })
    .select()
    .overrideTypes<Message[]>();

  return data;
};

export const deleteMessage = async (id: string) => {
  if (!client) await initializeClient();

  try {
    await client.from("question").delete().eq("id", id);

    return true;
  } catch {
    return false;
  }
};

export const getMessages = async () => {
  if (!client) await initializeClient();

  const { data } = await client
    .from("question")
    .select("*")
    .overrideTypes<Message[]>();

  return data;
};

export const subscribeToMessages = (
  client: SupabaseClient,
  {
    onDelete,
    onCreate,
  }: {
    onDelete: (message: Message) => void;
    onCreate: (message: Message) => void;
  }
) =>
  client
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "question" },
      (payload) => {
        if (payload.eventType === "INSERT") {
          onCreate(payload.new as Message);
          return;
        }

        if (payload.eventType === "DELETE") {
          onDelete(payload.old as Message);
          return;
        }
      }
    )
    .subscribe();
