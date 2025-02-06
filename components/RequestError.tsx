import { Callout } from "@radix-ui/themes";

export function RequestError() {
  return (
    <Callout.Root color="red">
      <Callout.Text>Что-то пошло не так, попробуйте позже :(</Callout.Text>
    </Callout.Root>
  );
}
