export interface Question {
  id: number;
  category: 'vehicle' | 'traffic' | 'practical' | 'signs';
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  hasImage?: boolean;
  images?: string[];
  signCode?: string;
  explanation?: string;
}

export interface Category {
  id: string;
  name: string;
  nameKiny: string;
  description: string;
  color: string;
  bgColor: string;
  icon: string;
  questionCount: number;
}

export interface GameSession {
  questions: Question[];
  currentIndex: number;
  score: number;
  lives: number;
  streak: number;
  maxStreak: number;
  answers: { questionId: number; answer: string; correct: boolean }[];
  timeStarted: number;
  timePerQuestion?: number;
  mode: 'quiz' | 'blitz' | 'study';
}

export interface GameResult {
  score: number;
  total: number;
  percentage: number;
  streak: number;
  timeElapsed: number;
  category: string;
  wrongAnswers: { question: Question; givenAnswer: string }[];
}
