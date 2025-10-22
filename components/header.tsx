"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ToggleButton } from "@/core/theme/toggle-button";
import { ArrowRightToLine } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  NG
                </span>
              </div>
              <span className="font-bold text-xl text-foreground">POLL</span>
            </Link>
          </div>

          <div className="items-center space-x-4">
            <Link href="/auth">
              <Button size="icon" data-testid="login-button">
                <ArrowRightToLine />
              </Button>
            </Link>
            <ToggleButton />
          </div>
        </div>
      </div>
    </header>
  );
}
