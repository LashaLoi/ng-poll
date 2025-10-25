import { useState } from "react";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { deleteMessageAction } from "./actions";
import type { Message as MessageType } from "@/core/api";

export function Message({ message }: { message: MessageType }) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onDelete = async () => {
    setIsDeleteLoading(true);

    try {
      const result = await deleteMessageAction(message.id.toString());

      console.log({ result });

      if (result !== "error") return;

      setIsError(true);
      return;
    } catch (error) {
      console.error(error);

      setIsError(true);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <Card key={message.id}>
      <CardContent>{message.text}</CardContent>
      <CardFooter className="flex justify-between gap-2">
        {new Date(message.created_at).toLocaleString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        })}
        <Button
          loading={isDeleteLoading}
          disabled={isDeleteLoading}
          onClick={onDelete}
        >
          Удалить
        </Button>
      </CardFooter>
      {isError && (
        <Alert variant="destructive">Ошибка при удалении сообщения</Alert>
      )}
    </Card>
  );
}
