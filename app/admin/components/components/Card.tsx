import { useState } from "react";

import { Box, Button, Card as RadixCard, Flex, Text } from "@radix-ui/themes";
import dayjs from "dayjs";

import { supabase } from "@/utils/supabase/client";
import type { Message } from "../../types";
import { RequestError } from "@/components/RequestError";

export function Card({ message }: { message: Message }) {
  const [isSuccessLoading, setIsSuccessLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSuccess = async (id: number) => {
    setIsSuccessLoading(true);

    try {
      await supabase.from("question").delete().eq("id", id);
    } catch (error) {
      console.error(error);

      setIsError(true);
    } finally {
      setIsSuccessLoading(false);
    }
  };

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
    <>
      {isError && <RequestError />}

      <RadixCard my="4">
        <Flex className="flex-col">
          <Box pr="8">
            <Text as="div" size="3" mb="2">
              {message.text}
            </Text>
            <Text as="div" color="gray" size="2">
              {dayjs(message.created_at).format("DD.MM.YYYY HH:mm")}
            </Text>
          </Box>
          <Flex align="center" gap="2" className="mt-2">
            <Button
              color="green"
              onClick={() => onSuccess(message.id)}
              className="!w-[100px]"
              loading={isSuccessLoading}
            >
              Отвечено
            </Button>
            <Button
              color="red"
              onClick={() => onDelete(message.id)}
              className="!w-[100px]"
              loading={isDeleteLoading}
            >
              Удалить
            </Button>
          </Flex>
        </Flex>
      </RadixCard>
    </>
  );
}
