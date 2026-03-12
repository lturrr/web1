'use client'

import Link from "next/link";
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-[#0d0d14] to-[#12121a] relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Иконка */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm">
          <Search size={64} className="text-primary" />
        </div>

        {/* Заголовок */}
        <h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x"
          style={{ fontWeight: 900 }}
        >
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Страница не найдена
        </h2>

        <p className="text-foreground/70 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          К сожалению, мы не смогли найти страницу, которую вы ищете. 
          Возможно, она была перемещена или удалена.
        </p>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group px-8 py-4 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.6)] transition-all duration-300 inline-flex items-center gap-3 animate-gradient-x font-semibold"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform" />
            <span>На главную</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 bg-transparent border-2 border-primary/50 text-foreground rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 font-semibold"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Вернуться назад</span>
          </button>
        </div>
    </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes particle {
          0% { 
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}