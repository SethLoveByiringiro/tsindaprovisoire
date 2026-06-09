import mapData from "./question-images.json";

export type QuestionImageMap = Record<string, string[]>;

export const questionImages: QuestionImageMap = mapData.questions;

export function getQuestionImages(questionId: number): string[] {
  return questionImages[String(questionId)] ?? [];
}

export function hasQuestionImages(questionId: number): boolean {
  return getQuestionImages(questionId).length > 0;
}

export const imageStats = {
  totalImages: mapData.totalImages as number,
  questionsWithImages: mapData.questionsWithImages as number,
};
