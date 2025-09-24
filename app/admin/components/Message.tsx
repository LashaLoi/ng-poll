import { useState } from "react";
import { createClient } from "@/core/supabase/client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Message as MessageType } from "../types";
import { Alert } from "@/components/ui/alert";

const supabase = createClient();

export function Message({ message }: { message: MessageType }) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onDelete = async (id: number) => {
    setIsDeleteLoading(true);

    try {
      await supabase.from("question").delete().eq("id", id);
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
          variant="outline"
          loading={isDeleteLoading}
          disabled={isDeleteLoading}
          onClick={() => onDelete(message.id)}
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
