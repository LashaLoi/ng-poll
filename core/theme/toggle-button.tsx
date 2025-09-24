"use client";

import React, { useEffect, useState } from "react";

import { Loader } from "lucide-react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { icons, modes } from "./constants";

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
