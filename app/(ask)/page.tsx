import { AskForm } from "./components/ask-form";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { FadeIn } from "@/components/ui/fade-in";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function AskPage() {
  return (
    <div className="mt-6 p-4">
      <WavyBackground className="w-full">
        <div className="space-y-6 ">
          <div className="max-w-2xl mx-auto">
            <FadeIn variant="scale">
              <LayoutTextFlip
                text="Спроси меня "
                words={[
                  { text: "о Боге", className: "text-yellow-400" },
                  { text: "об Иисусе", className: "text-red-700" },
                  { text: "о Жизни", className: "text-cyan-300" },
                  { text: "о Мире", className: "text-purple-700" },
                ]}
              />
            </FadeIn>
            <div className="mt-4">
              <AskForm />
            </div>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}
