import { useEffect, useState } from "react";

import { supabase } from "@/utils/supabase/client";

import type { Message } from "../types";

export const useMessages = (initialMessages: Message[]) => {
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const channels = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "question" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setMessages((messages) => [...messages, payload.new as Message]);
            return;
          }

          if (payload.eventType === "DELETE") {
            setMessages((messages) =>
              messages.filter(({ id }) => id !== (payload.old as Message).id)
            );
            return;
          }
        }
      )
      .subscribe();

    return () => {
      channels.unsubscribe();
    };
  });

  return messages;
};
