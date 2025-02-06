"use client";

import { Container } from "@radix-ui/themes";

import { useMessages } from "./hooks";

import type { Message } from "../types";
import { Card } from "./components/Card";

type QuestionsProps = {
  messages: Message[];
};

export function Questions({ messages: initialMessages }: QuestionsProps) {
  const messages = useMessages(initialMessages);

  return (
    <Container p="5">
      {messages.map((message) => (
        <Card message={message} key={message.id} />
      ))}
    </Container>
  );
}
