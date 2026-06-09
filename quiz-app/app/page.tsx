"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { categories, questions } from "@/data/questions";
import Logo from "@/components/Logo";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  speed: Math.random() * 2 + 0.5,
  delay: Math.random() * 5,
}));

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalQuestions = questions.length;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated particles */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-cyan-400 opacity-20"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animation: `pulse ${p.speed + 1}s ease-in-out ${p.delay}s infinite alternate`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Logo */}
          <div className="inline-block mb-6">
            <div className="relative flex flex-col items-center">
              <Logo size={100} className="mb-4 sm:mb-5 drop-shadow-[0_0_28px_rgba(0,255,136,0.45)]" />
              <div className="text-xs sm:text-sm font-game text-cyan-400 mb-2 tracking-widest text-glow-blue">
                RWANDA DRIVING
              </div>
              <h1 className="font-game text-xl sm:text-3xl md:text-4xl text-white leading-tight">
                <span className="text-glow-green" style={{ color: '#00ff88' }}>Tsinda</span>
                <span className="text-cyan-300 text-glow-blue"> Provisoire</span>
              </h1>
              <div className="text-xs sm:text-sm font-game text-yellow-400 mt-2 text-glow-yellow tracking-wider">
                LEVEL UP YOUR KNOWLEDGE
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-8 mb-4">
            {[
              { label: 'QUESTIONS', value: totalQuestions, color: '#00ff88' },
              { label: 'CATEGORIES', value: categories.length, color: '#00d4ff' },
              { label: 'GAME MODES', value: 3, color: '#ffe66d' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-hud text-2xl sm:text-4xl font-black"
                  style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}80` }}
                >
                  {stat.value}
                </div>
                <div className="font-hud text-xs text-gray-400 tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-300 font-body text-lg sm:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            Menya amategeko y&apos;imihanda w&apos;u Rwanda ukigira imikino!{' '}
            <span className="text-cyan-400">Learn by playing,</span>{' '}
            <span className="text-green-400">pass with confidence.</span>
          </p>
        </div>

        {/* Game Mode Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <Link href="/quiz?mode=quiz" className="group">
            <div className="game-card p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 border border-green-900 hover:border-green-400 glow-green h-full">
              <div className="text-5xl mb-3">🎮</div>
              <div className="font-game text-xs sm:text-sm text-green-400 mb-2 text-glow-green">QUIZ MODE</div>
              <p className="text-gray-300 text-sm font-body">
                Isubizo rimwe cyangwa inshuro nyinshi — genzura ubumenyi bwawe!
              </p>
              <div className="mt-4 btn-game bg-green-900 hover:bg-green-700 text-green-400 text-xs py-2 px-4 rounded-lg inline-block border border-green-700">
                START QUIZ
              </div>
            </div>
          </Link>

          <Link href="/quiz?mode=blitz" className="group">
            <div className="game-card p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 border border-yellow-900 hover:border-yellow-400 h-full">
              <div className="text-5xl mb-3">⚡</div>
              <div className="font-game text-xs sm:text-sm text-yellow-400 mb-2 text-glow-yellow">BLITZ MODE</div>
              <p className="text-gray-300 text-sm font-body">
                Igihe gito kuri buri kibazo — subiza vuba!
              </p>
              <div className="mt-4 btn-game bg-yellow-900 hover:bg-yellow-700 text-yellow-400 text-xs py-2 px-4 rounded-lg inline-block border border-yellow-700">
                SPEED RUN
              </div>
            </div>
          </Link>

          <Link href="/study" className="group">
            <div className="game-card p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 border border-blue-900 hover:border-blue-400 h-full">
              <div className="text-5xl mb-3">📚</div>
              <div className="font-game text-xs sm:text-sm text-blue-400 mb-2 text-glow-blue">STUDY MODE</div>
              <p className="text-gray-300 text-sm font-body">
                Soma ibibazo byose n&apos;ibisubizo byabyo — iga neza!
              </p>
              <div className="mt-4 btn-game bg-blue-900 hover:bg-blue-700 text-blue-400 text-xs py-2 px-4 rounded-lg inline-block border border-blue-700">
                STUDY NOW
              </div>
            </div>
          </Link>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-cyan-800" />
            <h2 className="font-game text-xs sm:text-sm text-cyan-400 tracking-widest text-glow-blue px-4">
              SELECT CATEGORY
            </h2>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-cyan-800" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/quiz?category=${cat.id}&mode=quiz`}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div
                  className={`category-card game-card p-5 cursor-pointer border transition-all duration-300 ${
                    hoveredCategory === cat.id
                      ? 'border-opacity-80 scale-[1.02]'
                      : 'border-opacity-20'
                  }`}
                  style={{
                    borderColor: hoveredCategory === cat.id ? `${cat.color}cc` : `${cat.color}33`,
                    boxShadow: hoveredCategory === cat.id
                      ? `0 0 20px ${cat.color}40, 0 0 40px ${cat.color}20`
                      : 'none',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl sm:text-5xl shrink-0">{cat.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-game text-xs sm:text-sm mb-1 truncate"
                        style={{ color: cat.color, textShadow: `0 0 10px ${cat.color}60` }}
                      >
                        {cat.nameKiny}
                      </div>
                      <p className="text-gray-400 text-sm font-body leading-snug mb-3">{cat.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="font-hud font-bold text-lg sm:text-xl"
                            style={{ color: cat.color }}
                          >
                            {cat.questionCount}
                          </div>
                          <span className="text-gray-500 text-xs font-hud tracking-wider">QUESTIONS</span>
                        </div>
                        <div
                          className="text-xs font-hud px-3 py-1 rounded border"
                          style={{
                            color: cat.color,
                            borderColor: `${cat.color}40`,
                            background: `${cat.color}10`,
                          }}
                        >
                          PLAY →
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="progress-bar mt-4">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${(cat.questionCount / totalQuestions) * 100}%`,
                        background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})`,
                        boxShadow: `0 0 8px ${cat.color}60`,
                      }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="game-card p-5 text-center">
          <div className="font-game text-xs text-gray-500 mb-2">HOW TO PLAY</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-body text-gray-400">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-green-400">✓</span>
              <span>Subiza ibibazo 4 by&apos;amajwi</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-yellow-400">⚡</span>
              <span>Ubwihangane bw&apos;ibihe buratanga amanota</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-cyan-400">🔥</span>
              <span>Komeza streak wagire amanota menshi</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-gray-600 font-mono">
          BASED ON OFFICIAL RWANDA HIGHWAY CODE • {totalQuestions} QUESTIONS
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          from { opacity: 0.1; transform: scale(1); }
          to { opacity: 0.4; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}

