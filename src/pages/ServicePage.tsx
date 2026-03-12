'use client'

import { ArrowLeft, Check, Clock, Sparkles, ArrowRight, Shield, Zap, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import { getServiceById, ServicePackage, WorkStage, PaymentStage } from '../shared/data/servicesData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ServicePageProps {
  onContactClick: () => void;
}

export default function ServicePage({ onContactClick }: ServicePageProps) {
  const pathname = usePathname();

  const pathParts = pathname.split('/').filter(part => part !== '');
  const serviceId = pathParts[pathParts.length - 1] || '';
  
  const service = getServiceById(serviceId);
  const procentRef = useRef<number>(0);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Услуга не найдена</h1>
          <Link
            href='/'
            className="px-6 py-3 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-xl hover:scale-105 transition-all"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const PackageCard = ({ pkg, index }: { pkg: ServicePackage; index: number }) => (
  <div
    className={`relative p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 animate-scale-in mb-8 ${
      pkg.recommended
        ? 'bg-gradient-to-br from-card to-card/60 border-primary shadow-[0_20px_80px_-20px_rgba(212,175,55,0.4)] scale-105'
        : 'bg-gradient-to-br from-card/60 to-card/30 border-primary/30 hover:border-primary/50'
    }`}
    style={{
      animationDelay: `${index * 0.1}s`,
    }}
  >
    {pkg.recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-full text-sm font-semibold shadow-lg animate-glow">
        Рекомендуем
      </div>
    )}

    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-foreground mb-4">{pkg.name}</h3>
      <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
        {pkg.price}
      </div>
    </div>

    <ul className="space-y-4 mb-8">
      {pkg.features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <span className="text-foreground/80">{feature}</span>
        </li>
      ))}
    </ul>

    {/* ИЗМЕНИТЕ ЭТУ КНОПКУ - убрали Link */}
    <button
      onClick={onContactClick}
      className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
        pkg.recommended
          ? 'bg-gradient-to-r from-primary to-[#ffd700] text-background hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.6)]'
          : 'bg-primary/10 border-2 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50'
      }`}
    >
      <span>Заказать</span>
      <ArrowRight size={20} />
    </button>
  </div>
);

  const StageCard = ({ stage, index }: { stage: WorkStage; index: number }) => (
    <div
      className="group relative p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)] animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-background text-2xl font-bold shadow-lg`}>
            {stage.number}
          </div>
          <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
            {stage.duration}
          </div>
        </div>

        <h3 className="text-2x1 font-bold text-foreground mb-4">{stage.title}</h3>
        <p className="text-foreground/70 mb-6" >
          {stage.description}
        </p>

        <div className="mb-6">
          <h4 className="text-foreground/90 mb-3 flex items-center gap-2 font-semibold">
            <CheckCircle2 size={20} className="text-primary" />
            <span>Что получите:</span>
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {stage.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2`} />
                <span className="text-sm text-foreground/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20">
          <h4 className="text-primary mb-3 flex items-center gap-2 font-semibold">
            <Sparkles size={18} />
            <span>Преимущества:</span>
          </h4>
          <div className="space-y-2">
            {stage.advantages.map((advantage, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <TrendingUp size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  const PaymentCard = ({ payment, index }: { payment: PaymentStage; index: number }) => (
    <div
      className="relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`text-5xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
          {payment.percentage}%
        </div>
        <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
          {payment.when}
        </div>
      </div>
      <h4 className="text-xl font-bold text-foreground mb-3">{payment.stage}</h4>
      <p className="text-foreground/70 mb-4">{payment.description}</p>
      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${service.color} transition-all duration-1000`}
          style={{ width: `${procentRef.current += payment.percentage}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="service-page min-h-screen bg-gradient-to-b from-background via-[#0d0d14] to-[#12121a]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-15 blur-[150px] animate-float-1"
          style={{
            background: 'radial-gradient(circle, #d4af37 0%, #ffd700 50%, transparent 100%)',
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-[800px] h-[800px] rounded-full opacity-12 blur-[150px] animate-float-2"
          style={{
            background: 'radial-gradient(circle, #ffd700 0%, #b8860b 50%, transparent 100%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[150px] animate-float-3"
          style={{
            background: 'radial-gradient(circle, #b8860b 0%, #d4af37 50%, transparent 100%)',
          }}
        />

        <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-primary/10 rotate-45 animate-spin-very-slow" />
        <div className="absolute top-[60%] right-[15%] w-24 h-24 border-2 border-primary/20 rounded-full animate-pulse-ring" />
        <div className="absolute bottom-[30%] left-[20%] w-40 h-40 border border-primary/10 animate-float-rotate" />

        {[...Array(30)].map((_, i) => {
          const left = 10 + (i * 3) % 80;
          const top = 5 + (i * 7) % 90;
          const delay = (i * 0.3) % 8;
          const duration = 10 + (i * 0.5) % 10;
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-foreground mb-8 transition-colors grouo animate-fade-in"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Назад к услугам</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles size={18} className="text-primary animate-pulse-slow" />
                <span className="text-sm text-primary uppercase tracking-wider">{service.subtitle}</span>
              </div>

              <h1
                className="mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 50%, #ffd700 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {service.title}
              </h1>

              <p className="text-foreground/80 mb-8 text-xl" style={{ lineHeight: 1.8 }}>
                {service.description}
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Clock size={20} className="text-primary" />
                  <span>Срок: {service.timeline}</span>
                </div>
              </div>

              <button
                onClick={onContactClick}
                className="px-10 py-5 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl hover:scale-110 hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.6)] transition-all duration-300 inline-flex items-center gap-3 animate-gradient-x"
                style={{ fontSize: '1.125rem', fontWeight: 600 }}
              >
                <span>Обсудить проект</span>
                <ArrowRight size={24} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="col-span-3 p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
                <Shield size={32} className="text-primary mb-4" />
                <div className="text-2xl font-bold text-foreground mb-2">Гарантия качества</div>
                <p className="text-foreground/70">Договор, поэтапная оплата, техподдержка</p>
              </div>
              <div className="col-span-3 md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm text-center hover:-translate-y-2 transition-all duration-300">
                <Zap size={28} className="text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-primary mb-1">95+</div>
                <p className="text-sm text-foreground/70">Lighthouse</p>
              </div>
              <div className="col-span-3 md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm text-center hover:-translate-y-2 transition-all duration-300">
                <Target size={28} className="text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-primary mb-1">280%</div>
                <p className="text-sm text-foreground/70">Рост конверсии</p>
              </div>
              <div className="col-span-3 md:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm text-center hover:-translate-y-2 transition-all duration-300">
                <Sparkles size={28} className="text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-primary mb-1">100%</div>
                <p className="text-sm text-foreground/70">Уникально</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-background/30">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2
              className="mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Почему это нужно вашему бизнесу
            </h2>
            <p className="text-foreground/80 mb-8 text-lg" style={{ lineHeight: 1.8 }}>
              {service.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Check size={24} className="text-primary mb-4" />
                <p className="text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="max-w-8xl mx-auto" style={{border: '1px solid var(--primary)', boxShadow: '0 6px 9px var(--primary)'}}/>
      <section className="relative py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Пакеты услуг
            </h2>
            <p className="text-foreground/70 text-lg">Выберите подходящий вариант для вашего бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {service.packages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Дополнительные услуги
            </h2>
            <p className="text-foreground/70 text-lg">Расширьте функционал вашего проекта</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.additionalServices.map((addon, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)] animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">{addon.name}</h3>
                  <div className={`text-xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent whitespace-nowrap`}>
                    {addon.price}
                  </div>
                </div>
                <p className="text-foreground/70 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      <section className="relative py-20 bg-gradient-to-b from-transparent to-background/30">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Схема оплаты
            </h2>
            <p className="text-foreground/70 text-lg">Удобная поэтапная оплата с гарантиями</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {service.paymentStages.map((payment, index) => (
              <PaymentCard key={index} payment={payment} index={index} />
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/30 backdrop-blur-sm text-center max-w-3xl mx-auto">
            <Shield size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Безопасность платежей
            </h3>
            <p className="text-foreground/70 mb-4">
              Все платежи защищены договором. Мы работаем официально с юридическими лицами и ИП.
              Предоставляем полный пакет документов.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-foreground/60">
              <span>✓ Договор</span>
              <span>✓ Акты</span>
              <span>✓ Счета</span>
              <span>✓ Гарантия</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="max-w-8xl mx-auto" style={{border: '1px solid var(--primary)', boxShadow: '0 6px 9px var(--primary)'}}/>

      <div className="relative py-20 bg-gradient-to-b from-transparent to-background">
        <section className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Как мы работаем
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Прозрачный процесс разработки с четкими этапами и результатами
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {service.workStages.map((stage, index) => (
              <StageCard key={index} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </section>
      </div>
      <hr className="max-w-8xl mx-auto" style={{border: '1px solid var(--primary)', boxShadow: '0 6px 9px var(--primary)'}}/>
      <section className="relative py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-12 rounded-3xl overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card/90 to-card/70">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 animate-gradient-slow`} />
            </div>

            <div className="absolute inset-0 rounded-3xl p-[2px]">
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-50 blur-sm animate-gradient-x`} />
            </div>
            <div className="absolute inset-[2px] rounded-3xl bg-card" />

            <div className="relative z-10 text-center">
              <Sparkles size={48} className="text-primary mx-auto mb-6 animate-pulse-slow" />
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Готовы начать проект?
              </h3>
              <p className="text-foreground/70 mb-8 text-lg">
                Получите бесплатную консультацию и точный расчет стоимости вашего проекта
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onContactClick}
                  className="group px-5 py-5 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl hover:scale-110 hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.6)] transition-all duration-300 inline-flex items-center justify-center gap-3 animate-gradient-x"
                  style={{ fontSize: '1.1rem', fontWeight: 600 }}
                >
                  <span>Обсудить проект</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <a
                  href="tel:+79605544377"
                  className="px-5 py-5 bg-transparent border-2 border-primary/50 text-foreground rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
                  style={{ fontSize: '1.1rem', fontWeight: 600 }}
                >
                  <span>Позвонить сейчас</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}