"use client";

import Image from "next/image";
import { getQuestionImages } from "@/data/question-images";

interface QuestionImageProps {
  questionId: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "max-h-24 max-w-[120px]",
  md: "max-h-40 max-w-[200px]",
  lg: "max-h-56 max-w-[280px]",
};

export default function QuestionImage({
  questionId,
  className = "",
  size = "md",
}: QuestionImageProps) {
  const images = getQuestionImages(questionId);
  if (images.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {images.map((src, i) => (
        <div
          key={`${questionId}-${i}`}
          className="relative rounded-lg overflow-hidden border border-white/10 bg-white p-1.5 shadow-lg"
          style={{ boxShadow: "0 0 20px rgba(0, 212, 255, 0.15)" }}
        >
          <Image
            src={src}
            alt={`Ikibazo ${questionId} ifoto ${i + 1}`}
            width={280}
            height={280}
            className={`object-contain w-auto h-auto ${sizeClasses[size]}`}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
