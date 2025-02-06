"use client";

import { useActionState } from "react";

import { Flex, Heading, TextField } from "@radix-ui/themes";

import { Submit } from "@/components/Submit";
import { RequestError } from "@/components/RequestError";

import { sendPassword } from "./actions";

export default function Auth() {
  const [state, action] = useActionState(sendPassword, "initial");

  return (
    <div className="mx-auto w-full flex justify-center">
      <form action={action} className="sm:w-[500px] w-full mt-[20%] m-4">
        <Heading size="6" mb="5">
          Введите пароль
        </Heading>
        <Flex gap="3" direction="column">
          <TextField.Root
            className="w-full "
            required
            type="password"
            placeholder="Пароль ..."
            name="password"
            color="cyan"
          />
          <Submit />
          {state === "error" && <RequestError />}
        </Flex>
      </form>
    </div>
  );
}
