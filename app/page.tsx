"use client";

import Image from "next/image";

import { useState } from "react";

import { askRequest } from "@/utils/supabase/api";

import { Input } from "@/components/Input";
import { ColourfulText } from "@/components/Text";
import { BackgroundBeamsWithCollision } from "@/components/Background";

import { Notification } from "./components/Notification";

const placeholders = [
  "Где вы черпаете вдохновение?",
  "Какие у вас есть вопросы к Богу?",
  "Любимое место писание?",
  "Как вы пришли к Богу?",
  "С какими сложностями вы сталкиваетесь??",
];

export default function Home() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"ok" | "error" | "initial">("initial");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setInput(value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resultStatus = await askRequest(input);
    setStatus(resultStatus);

    setTimeout(() => setStatus("initial"), 3000);
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex justify-center items-center">
        <Image src="/logo.svg" height={200} width={200} alt="logo" />
      </div>
      <div className="pt-[100px] flex flex-col justify-center items-center px-4">
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
