import { useState, useEffect, useRef } from 'react';
import { TrendingDown, TrendingUp, Clock, AlertTriangle, DollarSign, XCircle, ThumbsDown } from 'lucide-react';
import { MagneticButton } from '../shared/UI/MagneticButton';

interface PainProps {
  onContactClick: () => void;
}

export function Pain({ onContactClick }: PainProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  
  const fullText = 'Эти боли знакомы каждому владельцу бизнеса';
  const typingSpeed = 80;

  const floatingPhrases = [
    { text: 'Знакомо?', top: '15%', left: '10%' },
    { text: 'Это про вас?', top: '25%', left: '80%' },
    { text: 'Узнали себя?', top: '60%', left: '15%' },
    { text: 'Больно...', top: '45%', left: '75%' },
    { text: 'Так было?', top: '75%', left: '20%' },
    { text: 'Точно знакомо!', top: '35%', left: '85%' },
  ];

  const pains = [
    {
      icon: Clock,
      title: 'Устаревший дизайн',
      description: 'Клиенты уходят к конкурентам с первых секунд. Сайт выглядит как из 2010 года.',
      stat: '85% отказов',
      gradient: 'pain-gradient-2',
      catchphrase: 'Это про вас?'
    },
    {
      icon: DollarSign,
      title: 'Дорогая разработка',
      description: 'Платили студии огромные деньги, а результат не оправдал ожиданий. Снова искать?',
      stat: '₽500k впустую',
      gradient: 'pain-gradient-4',
      catchphrase: 'Узнали себя?'
    },
    {
      icon: ThumbsDown,
      title: 'Низкое доверие клиентов',
      description: 'Сайт не вызывает доверия. Посетители не верят в качество ваших услуг.',
      stat: '0% конверсия',
      gradient: 'pain-gradient-5',
      catchphrase: 'Так было?'
    },
  ];

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [isVisible]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }
  }));

  return (
    <section className="pain-section" ref={sectionRef}>
      <div className="absolute left-0 w-full overflow-hidden" style={{ bottom: '-1.5rem',lineHeight: 0, height: '10vh' }}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-full"
        >
          <path 
            d="M0,50 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z" 
            fill="url(#waveGrad5)"
            opacity="1"
          />
          <path 
            d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,120 L0,120 Z" 
            fill="url(#waveGrad6)"
            opacity="0.25"
          />
        </svg>
      </div>
       <div className="absolute -top-6 left-0 w-full overflow-hidden" style={{ lineHeight: 0, height: '10vh' }}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-full"
          style={{ transform: 'scaleY(-1)' }}
        >
          <path 
            d="M0,50 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z" 
            fill="url(#waveGrad5)"
            opacity=".1"
          />
          <path 
            d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,120 L0,120 Z" 
            fill="url(#waveGrad6)"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="waveGrad5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primay)" />
              <stop offset="100%" stopColor="dark" />
            </linearGradient>
            <linearGradient id="waveGrad6" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="dark" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pain-bg-pulse"></div>
      
      {particles.map(particle => (
        <div
          key={particle.id}
          className="pain-particle"
          style={particle.style}
        />
      ))}

      {isVisible && floatingPhrases.map((phrase, index) => (
        <div
          key={index}
          className="pain-floating-phrase"
          style={{
            top: phrase.top,
            left: phrase.left,
            animationDelay: `${index * 1.5}s`,
          }}
        >
          {phrase.text}
        </div>
      ))}

      <div className="pain-container">
        <div className={`pain-header ${isVisible ? '' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full mb-8 backdrop-blur-sm animate-pulse-long"
          role="status"
          aria-label="Премиальная веб-разработка и цифровые решения">
            <AlertTriangle className="text-primary animate-pulse-slow" size={20} />
            <span className="text-sm text-primary uppercase tracking-wider">Внимание</span>
          </div>

          <div className="pain-title pain__title-width">
            <h2 className="pain-title-text">
              {displayedText || <span style={{opacity: 0}}>Эти боли знакомы каждому владельцу бизнеса</span>}
            </h2>
          </div>
        </div>


          <div className="pain-grid pain__content-width">
            {isVisible && pains.map((pain, index) => (
              <div key={index} className="pain-card group relative p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)]">
                <div className="pain-card-aura"></div>
                
                <div className="pain-catchphrase">{pain.catchphrase}</div>

                <div className="pain-icon-wrapper">
                  <div className={`pain-icon-glow ${pain.gradient}-glow`}></div>
                  <div className={`pain-icon ${pain.gradient}`}>
                    <pain.icon size={32} style={{ color: 'black' }} />
                  </div>
                </div>

                <h3 className="pain-card-title text-foreground">{pain.title}</h3>
                <p className="pain-card-description text-foreground/60">{pain.description}</p>

                <div className={`pain-stat ${pain.gradient}`}>
                  <TrendingDown size={18} style={{ color: 'black' }} />
                  <span>{pain.stat}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pain-cta">
            {isVisible && (
              <>
                <p className="pain-cta-text">
                  <span className="pain-cta-accent">Узнали себя?</span> Давайте решим эти проблемы раз и навсегда
                </p>
                <MagneticButton
                  onClick={onContactClick}
                  className="group px-10 py-5 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.6)] animate-gradient-x inline-flex items-center justify-center gap-3"
                  style={{ fontSize: '1.125rem', fontWeight: 600 }}
                  magneticStrength={0.4}
                >
                  <span className="font-bold">Бесплатная консультация</span>
                  <TrendingUp size={24} className="group-hover:translate-x-2 transition-transform" />
                </MagneticButton>
              </>
            )}
          </div>
      </div>
    </section>
  );
}