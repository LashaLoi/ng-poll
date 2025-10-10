import { FadeIn } from "@/components/ui/fade-in";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { WavyBackground } from "@/components/ui/wavy-background";

import { AskForm } from "./components/ask-form";

export default function AskPage() {
  return (
    <WavyBackground className="w-full p-2">
      <div className=" max-w-2xl mx-auto">
        <FadeIn variant="scale" className="flex justify-center gap-2">
          <LayoutTextFlip
            text="Спроси меня "
            words={[
              { text: "о Боге", className: "text-[#38bdf8]" },
              { text: "об Иисусе", className: "text-[#818cf8]" },
              { text: "о Жизни", className: "text-[#c084fc]" },
              { text: "о Мире", className: "text-[#e879f9]" },
            ]}
          />
        </FadeIn>
        <div className="mt-6">
          <AskForm />
        </div>
      </div>
    </WavyBackground>
  );
}
