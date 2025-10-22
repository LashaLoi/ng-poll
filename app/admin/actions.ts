"use server";

import { redirect } from "next/navigation";
import { getMe, getMessages } from "@/core/api";

export const getMeAction = async () => {
  const user = await getMe();

  if (!user) redirect("/auth");
};

export const getMessagesAction = getMessages;
