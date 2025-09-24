"use client";

import { useMessages } from "../hooks";

import { FadeInStagger } from "@/components/ui/fade-in";

import type { Message as MessageType } from "../types";

import { Message } from "./Message";

type MessagesProps = {
  messages: MessageType[];
};

export function Messages({ messages: initialMessages }: MessagesProps) {
  const messages = useMessages(initialMessages);

  return (
    <FadeInStagger>
      <div className="p-4 flex flex-col gap-5">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </FadeInStagger>
  );
}
