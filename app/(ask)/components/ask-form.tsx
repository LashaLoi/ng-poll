"use client";

import { CheckCircle2Icon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Textarea } from "@/components/ui/textarea";

import { useAskForm } from "../hooks";

export function AskForm() {
  const { state, formAction, pending } = useAskForm();

  return (
    <FadeIn variant="slow">
      <form className="w-full flex flex-col gap-4" action={formAction}>
        <Textarea
          className="h-48"
          name="question"
          required
          placeholder="Спроси меня о чем угодно..."
        />
        <div className="flex gap-2">
          <Button loading={pending} type="submit">
            Задать вопрос
          </Button>
          <Button variant="secondary" type="reset">
            Очистить
          </Button>
        </div>

        {state === "error" && (
          <Alert variant="destructive">
            <CheckCircle2Icon />
            <AlertTitle>Ошибка</AlertTitle>
            <AlertDescription>
              Во время запроса произошла ошибка. Попробуйте позже.
            </AlertDescription>
          </Alert>
        )}
        {state === "ok" && (
          <Alert variant="success" data-testid="success-notification">
            <CheckCircle2Icon />
            <AlertTitle>Готово!</AlertTitle>
            <AlertDescription>Ваш вопрос успешно отправлен.</AlertDescription>
          </Alert>
        )}
      </form>
    </FadeIn>
  );
}
