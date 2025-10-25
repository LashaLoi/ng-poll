import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

import { MessageCircle } from "lucide-react";

import Link from "next/link";

export default function Page() {
  return (
    <FadeIn className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="overflow-hidden border-2">
          <div className="p-8 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                У меня проблема...
              </h1>
            </div>

            <FadeIn className="flex flex-col gap-4 justify-center items-center pt-4">
              <Link
                href="https://t.me/SideswipeLoi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" className="  gap-2 w-[240px]">
                  <MessageCircle className="h-5 w-5" />
                  Написать мне в телеграм
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="  bg-transparent w-[240px]"
              >
                <Link href="/">На главную</Link>
              </Button>
            </FadeIn>
          </div>
        </Card>
      </div>
    </FadeIn>
  );
}
