import { MessageCircle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingButtonProps {
  onClick: () => void;
}

export function FloatingButton({ onClick }: FloatingButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`floating-button fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-primary via-[#ffd700] to-primary text-background shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)] flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-[0_30px_80px_-15px_rgba(212,175,55,0.9)] hover:rotate-[360deg] active:scale-90 ${
          isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-180'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          animation: isVisible ? 'float-wobble 3s ease-in-out infinite' : 'none',
        }}
        aria-label="Открыть форму обратной связи для обсуждения проекта"
        aria-haspopup="dialog"
        tabIndex={0}
      >
        <span 
          className="relative z-10 transition-all duration-300"
          style={{
            transform: isHovered ? 'translateZ(10px) scale(1.1)' : 'translateZ(0) scale(1)',
          }}
        >
          <MessageCircle 
            size={28} 
            className={`transition-all duration-300 ${isHovered ? 'rotate-12' : ''}`}
          />
        </span>

        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-[#ffd700] animate-ping-slow opacity-75" />

        <span className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />

        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <Sparkles
                key={i}
                size={12}
                className="absolute text-background animate-sparkle"
                style={{
                  top: '50%',
                  left: '50%',
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${i * 60}deg) translateY(-30px)`,
                }}
              />
            ))}
          </>
        )}

        <span 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-[#ffd700]/50 blur-xl transition-all duration-500"
          style={{
            transform: isHovered ? 'translateZ(-20px) scale(1.3)' : 'translateZ(-10px) scale(1)',
            opacity: isHovered ? 0.8 : 0.4,
          }}
        />

        <span
          className={`absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 bg-card/95 border border-primary/30 rounded-lg backdrop-blur-sm whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <span className="text-sm text-foreground">Обсудить проект</span>
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-primary/30 border-b-[6px] border-b-transparent" />
        </span>
      </button>
    </>
  );
}
