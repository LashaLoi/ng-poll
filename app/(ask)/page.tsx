import { AskForm } from "./components/ask-form";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { FadeIn } from "@/components/ui/fade-in";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function AskPage() {
  return (
    <WavyBackground className="w-full">
      <div className="p-4">
        <div className="space-y-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn variant="scale">
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
            <div className="mt-4">
              <AskForm />
            </div>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}
