"use client";

import { useActionState } from "react";
import { Heading, Flex, TextArea } from "@radix-ui/themes";

import { askAction } from "./actions";

import { Submit } from "../components/Submit";
import { Notification } from "./components/Notification";

export default function Home() {
  const [state, action] = useActionState(askAction, "initial");

  return (
    <div className="mx-auto w-full flex justify-center">
      <form action={action} className="sm:w-[500px] w-full mt-[20%] m-4">
        <Heading size="6" mb="5">
          Задайте ваш вопрос
        </Heading>
        <Flex gap="3" direction="column">
          <TextArea
            className="w-full h-[150px]"
            required
            placeholder="Вопрос ..."
            name="query"
            color="cyan"
          />
          <Submit />
          <Notification state={state} />
        </Flex>
      </form>
    </div>
  );
}
