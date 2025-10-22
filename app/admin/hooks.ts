import { useEffect, useState } from "react";

import { type Message, subscribeToMessages } from "@/core/api";
import { createClient } from "@/core/supabase/client";

export const useMessages = (initialMessages: Message[]) => {
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const channels = subscribeToMessages(createClient(), {
      onCreate: (message) => setMessages((messages) => [...messages, message]),
      onDelete: (message) =>
        setMessages((messages) =>
          messages.filter(({ id }) => id !== message.id)
        ),
    });

    return () => {
      channels.unsubscribe();
    };
  }, []);

  return messages;
};
