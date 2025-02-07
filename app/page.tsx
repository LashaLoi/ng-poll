"use client";

import Image from "next/image";

import { useState } from "react";

import { askRequest } from "@/utils/supabase/api";

import { Input } from "@/components/Input";
import { ColourfulText } from "@/components/Text";
import { BackgroundBeamsWithCollision } from "@/components/Background";

import { Notification } from "./components/Notification";

import { placeholders } from "./constants";

export default function Home() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"ok" | "error" | "initial">("initial");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setInput(value);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const resultStatus = await askRequest(input);
    setStatus(resultStatus);

    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => setStatus("initial"), 3000);
    setTimeoutId(id);
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex justify-center items-center h-[200px]">
        <Image src="/logo.svg" height={200} width={200} alt="logo" />
      </div>
      <div className="pt-[50px] flex flex-col justify-center items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-center sm:text-5xl text-3xl dark:text-white text-black">
          Задай свой <ColourfulText text="вопрос" />
        </h2>
        <Input
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <div className="mt-4">
          <Notification state={status} />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
