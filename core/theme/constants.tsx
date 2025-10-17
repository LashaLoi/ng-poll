import { Sun, Moon } from "lucide-react";

type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

const light: ListNode<string> = { value: "light", next: null };
const dark: ListNode<string> = { value: "dark", next: null };

light.next = dark;
dark.next = light;

export const modes = { light, dark };
export const icons = {
  light: <Sun key="light" />,
  dark: <Moon key="dark" />,
};
