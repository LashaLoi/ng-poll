import { Sun, Moon, Contrast } from "lucide-react";

type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

const light: ListNode<string> = { value: "light", next: null };
const dark: ListNode<string> = { value: "dark", next: null };
const system: ListNode<string> = { value: "system", next: null };

light.next = dark;
dark.next = system;
system.next = light;

export const modes = { light, dark, system };
export const icons = {
  light: <Sun key="light" />,
  dark: <Moon key="dark" />,
  system: <Contrast key="system" />,
};
