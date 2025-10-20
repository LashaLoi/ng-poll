"use server";

import { createClient } from "@/core/supabase/server";
import { redirect } from "next/navigation";

import type { Message } from "./types";

export const getUserAction = async () => {
  const client = await createClient();
  const { data: authData } = await client.auth.getUser();

  if (!authData.user) redirect("/auth");
};

export const getMessages = async () => {
  const client = await createClient();
  const { data } = await client
    .from("question")
    .select("*")
    .overrideTypes<Message[]>();

  return data;
};
