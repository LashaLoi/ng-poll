import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const withDelay = async (delayMs: number, fn?: () => void) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve({});

      fn?.();
    }, delayMs)
  );
};
