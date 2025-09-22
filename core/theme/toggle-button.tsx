"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";
import { icons, modes } from "./constants";

import { Loader } from "lucide-react";

export function ToggleButton() {
  const { setTheme, theme } = useTheme();
  const [icon, setIcon] = useState<React.ReactNode>(null);

  const nextTheme = modes[theme as keyof typeof modes]?.next?.value ?? "light";

  useEffect(() => {
    setIcon(icons[theme as keyof typeof icons]);
  }, [theme]);

  const handleClick = () => setTheme(nextTheme);

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      {icon ?? <Loader />}
    </Button>
  );
}
