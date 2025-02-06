"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@radix-ui/themes";

export function Submit() {
  const { pending } = useFormStatus();

  return (
    <Button loading={pending} type="submit" color="cyan">
      Отправить
    </Button>
  );
}
