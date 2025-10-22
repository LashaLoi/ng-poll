"use server";

import { deleteMessage } from "@/core/api";

export const deleteMessageAction = async (id: string) => {
  const isOk = await deleteMessage(id);

  return isOk ? "ok" : "error";
};
