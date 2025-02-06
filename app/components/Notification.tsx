"use client";

import { useFormStatus } from "react-dom";

import { Callout } from "@radix-ui/themes";

import { RequestError } from "@/components/RequestError";

type NotificationProps = {
  state: "ok" | "error" | "initial";
};

export function Notification({ state }: NotificationProps) {
  const { pending } = useFormStatus();

  const isOk = !pending && state === "ok";
  const isError = !pending && state === "error";

  if (isOk)
    return (
      <Callout.Root color="green">
        <Callout.Text>Сообщение успешно отправлено!</Callout.Text>
      </Callout.Root>
    );

  if (isError) return <RequestError />;

  return null;
}
