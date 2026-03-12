import { Sparkles, ArrowRight, Zap, TrendingUp, Award, Code2, Shield, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MagneticButton } from '../shared/UI/MagneticButton';

interface HeroProps {
  onContactClick: () => void;
}
const whyChooseUs = [
  {
    icon: Code2,
    title: 'Код без CMS',
    description: 'Разработка на чистом коде для максимальной скорости'
  },
  {
    icon: Zap,
    title: 'Скорость загрузки',
    description: 'Lighthouse 95+, загрузка в 10 раз быстрее конкурентов'
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Защита от взломов и резервное копирование'
  },
  {
    icon: Target,
    title: 'Конверсия',
    description: 'Фокус на бизнес-результат и конверсию'
  },
];

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className="hero relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-[#0d0d14] to-[#12121a]">
      <div className="hero__background absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #00008b 0%, #D045DB 50%, transparent 100%)',
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #b8860b 0%, #d4af37 50%, transparent 100%)',
            opacity: .5,
          }}
        />

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-[10%] w-32 h-32 border border-primary/20 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-1/4 right-[15%] w-40 h-40 border border-primary/10 animate-float-rotate" />
          <div className="absolute top-1/2 left-[20%] w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse-ring" />
        </div>
      </div>

      <div className="hero__content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center mb-10">
        <div className="hero__badge inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full mb-8 backdrop-blur-sm animate-pulse-long"
          role="status"
          aria-label="Качественная веб-разработка и цифровые решения">
          <Sparkles size={18} className="text-primary animate-pulse-slow" aria-hidden="true" />
          <span className="text-xs text-primary uppercase tracking-wider ">Качественная разработка</span>
        </div>

        <h1
          className="hero__title mb-8 animate-fade-in-up"
          style={{
            fontSize: 'clamp(2.15rem, 8vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            animationDelay: '0.2s',
            background: 'linear-gradient(135deg, var(--chart-3) 0%, #d4af37 20%, #d4af37 75%, #d4af37 100%)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Цифровые решения, <br />которые продают
        </h1>

        <p
          className="hero__subtitle mb-6 mx-auto max-w-3xl text-foreground/80 animate-fade-in-up"
          style={{ 
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            animationDelay: '0.4s',
            lineHeight: 1.6,
          }}
        >
          Веб-сайты, мобильные приложения и Telegram-боты.
          <span className="text-primary">{' '}Увеличение конверсии до 280%</span> для вашего бизнеса
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Zap size={16} className="text-primary" />
            <span>Скорость загрузки {'<'}1 сек</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <TrendingUp size={16} className="text-primary" />
            <span>Рост продаж</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Award size={16} className="text-primary" />
            <span>Гарантия качества</span>
          </div>
        </div>

        <div
          className="hero__cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
          role="group"
          aria-label="Основные действия"
        >
          <MagneticButton
            onClick={onContactClick}
            className="group relative px-8 py-5 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.5)] animate-gradient-x"
            aria-label="Обсудить ваш проект с нашей командой"
            tabIndex={0}
            magneticStrength={0.3}
          >
            <span className="relative z-10 flex items-center gap-2 font-bold">
              Бесплатная консультация
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </MagneticButton>

          <button
            onClick={() => {
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-10 py-6 bg-transparent border-2 border-primary/50 text-foreground rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hero__services_button"
            aria-label="Перейти к списку наших услуг"
            tabIndex={0}
          >
            <span className="flex items-center gap-2 font-semibold">
              Наши услуги
            </span>
          </button>
        </div>

        <div
          className="hero__stats grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`element${index} p-3 rounded-2xl bg-card/50 border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="mb-2 text-foreground" style={{fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)'}}>{item.title}</h3>
                <p className="text-foreground/60" style={{fontSize: 'clamp(0.7rem, 1.5vw, 1rem)'}}>{item.description}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full" style={{ lineHeight: 0, height: '20vh', marginBottom: '-.4rem'}}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-full"
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
        </svg>
      </div>
    </section>
  );
}