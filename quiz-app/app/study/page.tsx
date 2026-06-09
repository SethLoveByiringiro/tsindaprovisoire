"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { questions, categories } from "@/data/questions";
import { hasQuestionImages } from "@/data/question-images";
import QuestionImage from "@/components/QuestionImage";
import QuestionOptionImages, { isImageOptionQuestion } from "@/components/QuestionOptionImages";

export default function StudyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [showAnswers, setShowAnswers] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 20;

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const catMatch = selectedCategory === "all" || q.category === selectedCategory;
      const searchMatch = !search ||
        q.question.toLowerCase().includes(search.toLowerCase()) ||
        q.options.some((o) => o.text.toLowerCase().includes(search.toLowerCase()));
      return catMatch && searchMatch;
    });
  }, [selectedCategory, search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const toggleAnswer = (id: number) => {
    setShowAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const revealAll = () => {
    setShowAnswers(new Set(paged.map((q) => q.id)));
  };

  const hideAll = () => {
    setShowAnswers(new Set());
  };

  const handleFilterChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setSearch("");
    setShowAnswers(new Set());
  };

  const handleSearch = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
    setShowAnswers(new Set());
  };

  const catColors: Record<string, string> = {
    vehicle: "#00ff88",
    traffic: "#ff6b35",
    practical: "#00d4ff",
    signs: "#ffe66d",
  };

  return (
    <div className="min-h-screen p-4 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/" className="text-gray-500 hover:text-gray-300 font-mono text-xs block mb-2">
              ← HOME
            </Link>
            <h1 className="font-game text-xl sm:text-2xl text-cyan-400 text-glow-blue">
              STUDY MODE
            </h1>
            <p className="text-gray-400 font-body text-sm mt-1">
              {filtered.length} ibibazo byabonetse
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={revealAll}
              className="btn-game text-xs px-3 py-2 rounded border border-green-700 bg-green-900/50 text-green-400 font-hud"
            >
              SHOW ALL
            </button>
            <button
              onClick={hideAll}
              className="btn-game text-xs px-3 py-2 rounded border border-gray-700 bg-gray-900/50 text-gray-400 font-hud"
            >
              HIDE ALL
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Shakisha ikibazo... (search questions)"
            className="w-full bg-black/40 border border-cyan-800/50 focus:border-cyan-500 rounded-lg px-4 py-3 text-white font-body placeholder-gray-600 outline-none transition-colors"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded-lg text-sm font-hud border transition-all ${
              selectedCategory === "all"
                ? "bg-cyan-900 border-cyan-400 text-cyan-400"
                : "bg-black/30 border-gray-700 text-gray-400 hover:border-gray-500"
            }`}
          >
            ALL ({questions.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-hud border transition-all`}
              style={
                selectedCategory === cat.id
                  ? {
                      background: `${cat.color}20`,
                      borderColor: cat.color,
                      color: cat.color,
                    }
                  : {
                      background: "rgba(0,0,0,0.3)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#9ca3af",
                    }
              }
            >
              {cat.icon} {cat.nameKiny} ({cat.questionCount})
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-4 mb-8">
          {paged.length === 0 ? (
            <div className="game-card p-12 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <div className="font-hud text-gray-400">Nta kibazo kibonetse</div>
              <p className="text-gray-600 text-sm mt-2">No questions found for your search</p>
            </div>
          ) : (
            paged.map((q) => {
              const color = catColors[q.category] || "#00d4ff";
              const answered = showAnswers.has(q.id);
              return (
                <div
                  key={q.id}
                  className="game-card p-5 cursor-pointer transition-all hover:scale-[1.01]"
                  style={{ borderColor: `${color}20` }}
                  onClick={() => toggleAnswer(q.id)}
                >
                  {/* Question header */}
                  <div className="flex items-start gap-3 mb-3">
                    <span
                      className="font-game text-xs px-2 py-1 rounded border shrink-0"
                      style={{ color, borderColor: `${color}40`, background: `${color}10` }}
                    >
                      #{q.id}
                    </span>
                    <span
                      className="font-hud text-xs px-2 py-1 rounded shrink-0"
                      style={{ color: `${color}99`, background: `${color}10` }}
                    >
                      {categories.find((c) => c.id === q.category)?.icon}{" "}
                      {categories.find((c) => c.id === q.category)?.nameKiny}
                    </span>
                    <div className="flex-1" />
                    <span className="text-gray-600 text-xs font-mono shrink-0">
                      {answered ? "▲ HIDE" : "▼ SHOW"}
                    </span>
                  </div>

                  <p className="font-body text-base sm:text-lg text-white font-semibold leading-snug mb-4">
                    {q.question}
                  </p>

                  {hasQuestionImages(q.id) && !isImageOptionQuestion(q.options) && (
                    <div className="mb-4">
                      <QuestionImage questionId={q.id} size="md" />
                    </div>
                  )}

                  {hasQuestionImages(q.id) && isImageOptionQuestion(q.options) && (
                    <div className="mb-4" onClick={(e) => e.stopPropagation()}>
                      <QuestionOptionImages
                        questionId={q.id}
                        options={q.options}
                        correctAnswer={q.correctAnswer}
                        showResult={answered}
                        disabled
                      />
                    </div>
                  )}

                  {/* Options */}
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 ${isImageOptionQuestion(q.options) && hasQuestionImages(q.id) ? "hidden" : ""}`}>
                    {q.options.map((opt) => {
                      const isCorrect = opt.label === q.correctAnswer;
                      return (
                        <div
                          key={opt.label}
                          className={`flex items-start gap-2 p-3 rounded-lg border text-sm transition-all ${
                            answered && isCorrect
                              ? "border-green-600 bg-green-950/40"
                              : "border-white/5 bg-white/2"
                          }`}
                        >
                          <span
                            className={`font-hud font-bold text-xs w-5 h-5 flex items-center justify-center rounded shrink-0 mt-0.5 ${
                              answered && isCorrect
                                ? "bg-green-600 text-white"
                                : "bg-white/10 text-gray-400"
                            }`}
                          >
                            {opt.label.toUpperCase()}
                          </span>
                          <span
                            className={`font-body leading-snug ${
                              answered && isCorrect ? "text-green-400 font-semibold" : "text-gray-400"
                            }`}
                          >
                            {opt.text}
                          </span>
                          {answered && isCorrect && (
                            <span className="text-green-400 ml-auto shrink-0">✓</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {!answered && (
                    <div className="mt-3 text-center text-xs text-gray-600 font-mono">
                      CLICK TO REVEAL ANSWER
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded border border-gray-700 text-gray-400 hover:border-cyan-600 hover:text-cyan-400 disabled:opacity-30 font-hud text-sm transition-all"
            >
              ← PREV
            </button>

            {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
              const page = totalPages <= 10 ? i + 1 :
                currentPage <= 5 ? i + 1 :
                currentPage >= totalPages - 4 ? totalPages - 9 + i :
                currentPage - 4 + i;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded border font-hud text-sm transition-all ${
                    currentPage === page
                      ? "border-cyan-400 bg-cyan-900/50 text-cyan-400"
                      : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded border border-gray-700 text-gray-400 hover:border-cyan-600 hover:text-cyan-400 disabled:opacity-30 font-hud text-sm transition-all"
            >
              NEXT →
            </button>
          </div>
        )}

        {/* Start quiz CTA */}
        <div className="mt-8 game-card p-6 text-center">
          <div className="font-game text-xs text-gray-500 mb-3 tracking-wider">READY TO TEST YOUR KNOWLEDGE?</div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={`/quiz?mode=quiz${selectedCategory !== "all" ? `&category=${selectedCategory}` : ""}`}
              className="btn-game bg-green-900 hover:bg-green-700 text-green-400 px-6 py-3 rounded-lg text-sm border border-green-700 font-hud"
            >
              🎮 START QUIZ
              {selectedCategory !== "all" && ` (${categories.find((c) => c.id === selectedCategory)?.icon})`}
            </Link>
            <Link
              href={`/quiz?mode=blitz${selectedCategory !== "all" ? `&category=${selectedCategory}` : ""}`}
              className="btn-game bg-yellow-900 hover:bg-yellow-700 text-yellow-400 px-6 py-3 rounded-lg text-sm border border-yellow-700 font-hud"
            >
              ⚡ BLITZ MODE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

