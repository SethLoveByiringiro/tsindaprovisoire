"use client";

import Image from "next/image";
import { getQuestionImages } from "@/data/question-images";

/** Options that are image choices (a/b/c/d) rather than text answers */
export function isImageOptionQuestion(options: { label: string; text: string }[]): boolean {
  return options.every((o) =>
    /^(icyapa|ishusho)\s*[a-d]\)?$/i.test(o.text.trim()) ||
    /^[a-d]\)?$/i.test(o.text.trim())
  );
}

interface QuestionOptionImagesProps {
  questionId: number;
  options: { label: string; text: string }[];
  selectedAnswer?: string | null;
  correctAnswer?: string;
  showResult?: boolean;
  onSelect?: (label: string) => void;
  disabled?: boolean;
}

export default function QuestionOptionImages({
  questionId,
  options,
  selectedAnswer,
  correctAnswer,
  showResult = false,
  onSelect,
  disabled = false,
}: QuestionOptionImagesProps) {
  const images = getQuestionImages(questionId);
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {options.map((opt, i) => {
        const src = images[i];
        if (!src) return null;

        const isSelected = selectedAnswer === opt.label;
        const isCorrect = showResult && opt.label === correctAnswer;
        const isWrong = showResult && isSelected && opt.label !== correctAnswer;

        let borderClass = "border-white/15 hover:border-cyan-500/60";
        if (isCorrect) borderClass = "border-green-500 ring-2 ring-green-500/40";
        else if (isWrong) borderClass = "border-red-500 ring-2 ring-red-500/40";
        else if (isSelected) borderClass = "border-cyan-500 ring-2 ring-cyan-500/30";

        return (
          <button
            key={opt.label}
            type="button"
            disabled={disabled || showResult}
            onClick={() => onSelect?.(opt.label)}
            className={`relative rounded-xl overflow-hidden bg-white p-2 border-2 transition-all ${borderClass} ${!disabled && !showResult ? "cursor-pointer hover:scale-[1.02]" : ""}`}
          >
            <span
              className="absolute top-2 left-2 z-10 font-hud font-bold text-xs w-7 h-7 flex items-center justify-center rounded-full border"
              style={{
                background: isCorrect ? "#00ff8820" : isWrong ? "#ff6b3520" : "rgba(0,0,0,0.7)",
                borderColor: isCorrect ? "#00ff88" : isWrong ? "#ff6b35" : "rgba(255,255,255,0.3)",
                color: isCorrect ? "#00ff88" : isWrong ? "#ff6b35" : "#fff",
              }}
            >
              {opt.label.toUpperCase()}
            </span>
            <Image
              src={src}
              alt={`Option ${opt.label}`}
              width={200}
              height={200}
              className="object-contain w-full h-28 sm:h-36"
              unoptimized
            />
          </button>
        );
      })}
    </div>
  );
}
