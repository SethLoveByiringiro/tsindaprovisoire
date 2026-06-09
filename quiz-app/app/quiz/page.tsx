"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { questions, getRandomQuestions, categories } from "@/data/questions";
import { hasQuestionImages } from "@/data/question-images";
import QuestionImage from "@/components/QuestionImage";
import QuestionOptionImages, { isImageOptionQuestion } from "@/components/QuestionOptionImages";
import { Question } from "@/types";

const QUIZ_SIZE = 20;
const BLITZ_TIME = 15;
const QUIZ_TIME = 30;
const LIVES = 3;

function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mode = (searchParams.get("mode") || "quiz") as "quiz" | "blitz";
  const categoryId = searchParams.get("category") || undefined;

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(mode === "blitz" ? BLITZ_TIME : QUIZ_TIME);
  const [gameState, setGameState] = useState<"playing" | "finished" | "setup">("setup");
  const [wrongAnswers, setWrongAnswers] = useState<{ q: Question; given: string }[]>([]);
  const [shake, setShake] = useState(false);
  const [scoreAnim, setScoreAnim] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);

  const initQuiz = useCallback(() => {
    const qs = getRandomQuestions(QUIZ_SIZE, categoryId);
    setQuizQuestions(qs);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setLives(LIVES);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(mode === "blitz" ? BLITZ_TIME : QUIZ_TIME);
    setWrongAnswers([]);
    setGameState("playing");
    setStartTime(Date.now());
  }, [categoryId, mode]);

  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  // Timer
  useEffect(() => {
    if (gameState !== "playing" || isAnswered) return;
    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, gameState, isAnswered]);

  const handleTimeOut = () => {
    const current = quizQuestions[currentIdx];
    if (!current) return;
    setIsAnswered(true);
    setSelectedAnswer("timeout");
    setStreak(0);
    const newLives = lives - 1;
    setLives(newLives);
    setWrongAnswers((prev) => [...prev, { q: current, given: "Timeout" }]);
    if (newLives <= 0) {
      setTimeout(() => setGameState("finished"), 1500);
    } else {
      setTimeout(() => nextQuestion(), 2000);
    }
  };

  const handleAnswer = (label: string) => {
    if (isAnswered) return;
    const current = quizQuestions[currentIdx];
    setSelectedAnswer(label);
    setIsAnswered(true);

    const isCorrect = label === current.correctAnswer;
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      const bonus = newStreak >= 5 ? 30 : newStreak >= 3 ? 20 : 10;
      setScore((s) => s + bonus);
      setScoreAnim(true);
      setTimeout(() => setScoreAnim(false), 300);
    } else {
      setStreak(0);
      setShake(true);
      setTimeout(() => setShake(false), 400);
      const newLives = lives - 1;
      setLives(newLives);
      setWrongAnswers((prev) => [...prev, { q: current, given: label }]);
      if (newLives <= 0) {
        setTimeout(() => setGameState("finished"), 1800);
        return;
      }
    }

    setTimeout(() => nextQuestion(), 1500);
  };

  const nextQuestion = () => {
    const next = currentIdx + 1;
    if (next >= quizQuestions.length) {
      setGameState("finished");
    } else {
      setCurrentIdx(next);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(mode === "blitz" ? BLITZ_TIME : QUIZ_TIME);
    }
  };

  if (gameState === "setup" || quizQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="font-game text-cyan-400 text-sm animate-pulse">LOADING...</div>
      </div>
    );
  }

  if (gameState === "finished") {
    const pct = Math.round((score / (quizQuestions.length * 10)) * 100);
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    const correctCount = quizQuestions.length - wrongAnswers.length;
    const grade =
      correctCount >= quizQuestions.length * 0.9 ? "S" :
      correctCount >= quizQuestions.length * 0.75 ? "A" :
      correctCount >= quizQuestions.length * 0.6 ? "B" :
      correctCount >= quizQuestions.length * 0.4 ? "C" : "F";
    const gradeColor =
      grade === "S" ? "#ffe66d" : grade === "A" ? "#00ff88" : grade === "B" ? "#00d4ff" :
      grade === "C" ? "#ff6b35" : "#ff006e";

    const catInfo = categoryId ? categories.find((c) => c.id === categoryId) : null;

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="game-card p-8 text-center">
            {/* Grade */}
            <div className="mb-6">
              <div className="font-game text-xs text-gray-500 mb-2 tracking-widest">FINAL GRADE</div>
              <div
                className="font-game text-8xl sm:text-9xl"
                style={{ color: gradeColor, textShadow: `0 0 40px ${gradeColor}80` }}
              >
                {grade}
              </div>
              <div
                className="font-hud text-xl mt-2"
                style={{ color: gradeColor }}
              >
                {grade === "S" ? "PERFECT! UNBEATABLE!" :
                 grade === "A" ? "EXCELLENT! READY TO DRIVE!" :
                 grade === "B" ? "GOOD JOB! ALMOST THERE!" :
                 grade === "C" ? "KEEP PRACTICING!" : "TRY AGAIN!"}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { label: "SCORE", value: score, color: "#ffe66d" },
                { label: "CORRECT", value: `${correctCount}/${quizQuestions.length}`, color: "#00ff88" },
                { label: "MAX STREAK", value: maxStreak, color: "#ff6b35" },
                { label: "TIME", value: `${elapsed}s`, color: "#00d4ff" },
              ].map((stat) => (
                <div key={stat.label} className="bg-black/30 rounded-lg p-4">
                  <div className="font-hud text-xs text-gray-400 tracking-wider mb-1">{stat.label}</div>
                  <div className="font-hud text-2xl font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Wrong answers review */}
            {wrongAnswers.length > 0 && (
              <div className="mb-8 text-left">
                <div className="font-game text-xs text-red-400 mb-4 tracking-wider">WRONG ANSWERS REVIEW</div>
                <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  {wrongAnswers.map(({ q, given }, i) => (
                    <div key={i} className="bg-red-950/30 border border-red-800/40 rounded-lg p-3">
                      <div className="text-gray-300 text-sm font-body mb-2 leading-snug">
                        {q.id}. {q.question.slice(0, 100)}{q.question.length > 100 ? "..." : ""}
                      </div>
                      <div className="flex gap-3 text-xs">
                        <span className="text-red-400">
                          ✗ {given !== "Timeout" ? `${given}) ${q.options.find(o => o.label === given)?.text || given}` : "Time out!"}
                        </span>
                        <span className="text-green-400">
                          ✓ {q.correctAnswer}) {q.options.find(o => o.label === q.correctAnswer)?.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={initQuiz}
                className="btn-game bg-green-900 hover:bg-green-700 text-green-400 px-6 py-3 rounded-lg text-sm border border-green-700 font-hud"
              >
                🔄 PLAY AGAIN
              </button>
              {catInfo && (
                <Link
                  href={`/quiz?category=${categoryId}&mode=${mode}`}
                  className="btn-game bg-cyan-900 hover:bg-cyan-700 text-cyan-400 px-6 py-3 rounded-lg text-sm border border-cyan-700 font-hud text-center"
                >
                  {catInfo.icon} SAME CATEGORY
                </Link>
              )}
              <Link
                href="/"
                className="btn-game bg-gray-900 hover:bg-gray-700 text-gray-400 px-6 py-3 rounded-lg text-sm border border-gray-700 font-hud text-center"
              >
                🏠 HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const current = quizQuestions[currentIdx];
  const progress = ((currentIdx) / quizQuestions.length) * 100;
  const timerMax = mode === "blitz" ? BLITZ_TIME : QUIZ_TIME;
  const timerPct = (timeLeft / timerMax) * 100;
  const timerDanger = timeLeft <= 5;
  const catInfo = categoryId ? categories.find((c) => c.id === categoryId) : null;
  const imageOptions = isImageOptionQuestion(current.options) && hasQuestionImages(current.id);

  return (
    <div className="min-h-screen p-4 pb-8">
      <div className="max-w-2xl mx-auto">
        {/* HUD */}
        <div className="flex items-center justify-between mb-4 gap-2">
          <Link href="/" className="text-gray-500 hover:text-gray-300 font-mono text-xs">
            ← HOME
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            {/* Score */}
            <div className={`text-center ${scoreAnim ? "score-pop" : ""}`}>
              <div className="font-hud text-xs text-gray-500">SCORE</div>
              <div className="font-hud text-lg sm:text-2xl font-black text-yellow-400 text-glow-yellow">
                {score}
              </div>
            </div>

            {/* Streak */}
            <div className="text-center">
              <div className="font-hud text-xs text-gray-500">STREAK</div>
              <div className={`font-hud text-lg sm:text-2xl font-black text-orange-400 flex items-center gap-1 ${streak >= 3 ? "streak-fire" : ""}`}>
                {streak >= 3 && "🔥"}{streak}
              </div>
            </div>

            {/* Lives */}
            <div className="text-center">
              <div className="font-hud text-xs text-gray-500">LIVES</div>
              <div className="flex gap-0.5 mt-0.5">
                {Array.from({ length: LIVES }).map((_, i) => (
                  <span key={i} className={`text-lg ${i < lives ? "opacity-100" : "opacity-20 grayscale"}`}>
                    ❤️
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="font-hud text-xs text-gray-500">
              {catInfo && <span style={{ color: catInfo.color }}>{catInfo.icon} {catInfo.nameKiny} • </span>}
              Q{currentIdx + 1}/{quizQuestions.length}
            </span>
            <span className="font-hud text-xs text-gray-500 uppercase">{mode} MODE</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Timer */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="font-hud text-xs text-gray-500">TIME</span>
            <span
              className={`font-hud text-lg font-black ${timerDanger ? "text-red-400" : "text-cyan-400"} ${timerDanger ? "timer-danger" : "timer-ring"}`}
            >
              {timeLeft}s
            </span>
          </div>
          <div className="progress-bar">
            <div
              style={{
                height: "100%",
                borderRadius: "3px",
                transition: "width 1s linear",
                width: `${timerPct}%`,
                background: timerDanger
                  ? "linear-gradient(90deg, #ff4400, #ff6b35)"
                  : "linear-gradient(90deg, #00d4ff, #00ff88)",
                boxShadow: timerDanger
                  ? "0 0 10px rgba(255, 107, 53, 0.6)"
                  : "0 0 10px rgba(0, 255, 136, 0.6)",
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className={`game-card p-6 sm:p-8 mb-4 ${shake ? "shake" : ""}`}>
          <div
            className="font-game text-xs px-2 py-1 rounded border inline-block mb-5"
            style={{
              color: catInfo?.color || "#00d4ff",
              borderColor: `${catInfo?.color || "#00d4ff"}40`,
              background: `${catInfo?.color || "#00d4ff"}10`,
            }}
          >
            #{current.id}
          </div>

          {!imageOptions && (hasQuestionImages(current.id) || current.hasImage) && (
            <div className="mb-5">
              {hasQuestionImages(current.id) ? (
                <QuestionImage questionId={current.id} size="lg" />
              ) : (
                <SignPlaceholder signCode={current.signCode} category={current.category} />
              )}
            </div>
          )}

          <p className="font-body text-lg sm:text-xl text-white leading-relaxed font-semibold">
            {current.question}
          </p>
        </div>

        {/* Options */}
        {imageOptions ? (
          <QuestionOptionImages
            questionId={current.id}
            options={current.options}
            selectedAnswer={selectedAnswer}
            correctAnswer={current.correctAnswer}
            showResult={isAnswered}
            onSelect={handleAnswer}
            disabled={isAnswered}
          />
        ) : (
        <div className="space-y-3">
          {current.options.map((opt) => {
            let btnClass = "option-btn";
            if (isAnswered) {
              if (opt.label === current.correctAnswer) {
                btnClass += " correct";
              } else if (opt.label === selectedAnswer && selectedAnswer !== current.correctAnswer) {
                btnClass += " wrong";
              }
            } else if (opt.label === selectedAnswer) {
              btnClass += " selected";
            }

            return (
              <button
                key={opt.label}
                onClick={() => handleAnswer(opt.label)}
                disabled={isAnswered}
                className={btnClass}
              >
                <span className="flex items-start gap-3">
                  <span
                    className="font-hud font-bold text-sm shrink-0 w-6 h-6 flex items-center justify-center rounded border mt-0.5"
                    style={{
                      color: isAnswered && opt.label === current.correctAnswer ? "#00ff88" :
                             isAnswered && opt.label === selectedAnswer ? "#ff6b35" : "#00d4ff",
                      borderColor: isAnswered && opt.label === current.correctAnswer ? "#00ff88" :
                                   isAnswered && opt.label === selectedAnswer ? "#ff6b35" : "rgba(0,212,255,0.3)",
                    }}
                  >
                    {opt.label.toUpperCase()}
                  </span>
                  <span className="leading-snug">{opt.text}</span>
                </span>
              </button>
            );
          })}
        </div>
        )}

        {/* Feedback */}
        {isAnswered && (
          <div
            className={`mt-4 p-3 rounded-lg text-center font-hud text-sm ${
              selectedAnswer === current.correctAnswer
                ? "bg-green-950 border border-green-700 text-green-400"
                : selectedAnswer === "timeout"
                ? "bg-orange-950 border border-orange-700 text-orange-400"
                : "bg-red-950 border border-red-700 text-red-400"
            }`}
          >
            {selectedAnswer === current.correctAnswer ? (
              <span>
                ✓ CORRECT!{" "}
                {streak >= 5 ? "+30 pts 🔥 ULTRA STREAK!" :
                 streak >= 3 ? "+20 pts 🔥 ON FIRE!" : "+10 pts"}
              </span>
            ) : selectedAnswer === "timeout" ? (
              <span>⏰ TIME&apos;S UP! Correct: {current.correctAnswer.toUpperCase()}) {current.options.find(o => o.label === current.correctAnswer)?.text}</span>
            ) : (
              <span>✗ WRONG! Correct: {current.correctAnswer.toUpperCase()}) {current.options.find(o => o.label === current.correctAnswer)?.text}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function SignPlaceholder({ signCode, category }: { signCode?: string; category: string }) {
  const configs: Record<string, { shape: string; bg: string; border: string; text: string; symbol: string }> = {
    vehicle: { shape: "rounded", bg: "#1a3a1a", border: "#00ff88", text: "#00ff88", symbol: "🚗" },
    traffic: { shape: "rounded-full", bg: "#2a1a00", border: "#ff6b35", text: "#ff6b35", symbol: "🚦" },
    practical: { shape: "rounded", bg: "#001a2a", border: "#00d4ff", text: "#00d4ff", symbol: "⚠️" },
    signs: { shape: "rounded", bg: "#1a1a00", border: "#ffe66d", text: "#ffe66d", symbol: "🪧" },
  };
  const cfg = configs[category] || configs.signs;

  return (
    <div
      className={`sign-placeholder ${cfg.shape} text-xs`}
      style={{
        width: 56, height: 56,
        background: cfg.bg,
        border: `2px solid ${cfg.border}`,
        boxShadow: `0 0 10px ${cfg.border}40`,
        color: cfg.text,
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <span className="text-2xl">{cfg.symbol}</span>
      {signCode && <span className="font-mono" style={{ fontSize: 8 }}>{signCode}</span>}
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="font-game text-cyan-400 text-sm animate-pulse">LOADING QUIZ...</div>
      </div>
    }>
      <QuizContent />
    </Suspense>
  );
}

