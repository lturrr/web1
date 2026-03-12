import { useState } from 'react';
import { useRouter } from 'next/navigation';


import {
  Layout,
  ShoppingCart,
  Smartphone,
  Zap,
  Code2,
  ArrowRight,
  Target,
  Rocket,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Clock
} from 'lucide-react';
import { MagneticButton } from '../shared/UI/MagneticButton';
import Link from 'next/link';

interface ServicesProps {
  onContactClick: () => void;
}


export const serviceCategories = [
  {
    id: 'combo',
    title: 'IT Комбо 🎁',
    icon: TrendingUp,
    description: 'Комплексные решения для максимального эффекта',
    services: [
      {
        id: 'editing-combo',
        title: 'Редактирование сайта + Оптимизация скорости',
        description: '20% скидка на второе дыхание для Вашего сайта',
        price: 'от 34 400',
        duration: 'от 7 дней',
        icon: Zap,
        category: 'combo'
      },
      {
        id: 'ecommerce-combo',
        title: 'Интернет-магазин + Моибльное приложение Android/iOS + Telegram Bot',
        description: '9,1% скидка на полную цифровизацию магазина',
        price: 'от 229 900',
        duration: '10-14 недель',
        icon: Smartphone,
        category: 'combo'
      },
      {
        id: 'site-bot',
        title: 'Любой сайт + Telegram Bot',
        description: 'Скидка 4 000₽ на Telegram бот',
        price: 'от 39 900',
        duration: '1-6 недель',
        icon: MessageSquare,
        category: 'combo'
      },
    ],
  },
  {
    id: 'websites',
    title: 'Сайты',
    icon: Layout,
    description: 'Современные веб-решения для вашего бизнеса',
    services: [
      {
        id: 'landing',
        title: 'Landing Page',
        description: 'Продающая страница под рекламу',
        price: 'от 45 000',
        duration: '7-14 дней',
        icon: Layout,
      },
      {
        id: 'site-card',
        title: 'Сайт-визитка',
        description: 'Ваш персональный сайт',
        price: 'от 39 000',
        duration: '7-14 дней',
        icon: Layout,
      },
      {
        id: 'corporate',
        title: 'Корпоративный сайт',
        description: 'Представительский сайт компании',
        price: 'от 109 000',
        duration: '3-4 недели',
        icon: Code2,
      },
      {
        id: 'ecommerce',
        title: 'Интернет-магазин',
        description: 'E-commerce с каталогом и оплатой',
        price: 'от 139 000',
        duration: '4-6 недель',
        icon: ShoppingCart,
      },
      {
        id: 'optimization',
        title: 'Оптимизация скорости',
        description: 'Каждая секунда задержки снижает конверсию на 7%',
        price: 'от 19 000',
        duration: '7-14 дней',
        icon: Zap,
      },
      {
        id: 'editing',
        title: 'Редактирование сайта',
        description: 'Редактирование сайта любой сложности + CMS',
        price: 'от 24 000',
        duration: 'от 2 дней',
        icon: Zap,
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Мобильные приложения',
    icon: Smartphone,
    description: 'Нативные iOS и Android приложения на Flutter',
    services: [
      {
        id: 'ios',
        title: 'iOS приложение',
        description: 'Охватите аудиторию iPhone',
        price: 'от 79 000',
        duration: '8-12 недель',
        icon: Smartphone,
      },
      {
        id: 'android',
        title: 'Android приложение',
        description: 'Завоюйте массовый рынок',
        price: 'от 49 000',
        duration: '6-10 недель',
        icon: Smartphone,
      },
      {
        id: 'mobile',
        title: 'Android/iOS приложение',
        description: 'Единое решение для всех платформ',
        price: 'от 109 000',
        duration: '10-14 недель',
        icon: Smartphone,
      },
    ],
  },
  {
    id: 'telegram',
    title: 'Telegram-боты',
    icon: MessageSquare,
    description: 'Автоматизация бизнеса в мессенджере',
    services: [
      {
        id: 'telegram-bot',
        title: 'Telegram-бот',
        description: 'Бот для приема заказов и поддержки',
        price: 'от 4 900',
        duration: '2-7 дней',
        icon: MessageSquare,
      },
    ],
  },
];

export function Services({ onContactClick }: ServicesProps) {
  const router = useRouter();
  const handleCardClick = (serviceId: string) => {
    router.push(`/service/${serviceId}`)
  }
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setHoveredCard(id);
    setMousePos({ x, y });
  };
  
  return (
    <section
      id="services"
      className="services relative bg-gradient-to-b from-[#12121a] via-[#0d0d14] to-background"
      style={{
        paddingTop: '25px'
      }}
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0, height: '20vh' }}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-full"
          style={{ transform: 'scaleY(-1)' }}
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" style={{top: '250px', right: '250px'}}/>
        <div className="absolute left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" style ={{bottom: '550px'}}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="services__header text-center animate-fade-in mb-30">

          <h2
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 4rem)', 
              fontWeight: 800,
              background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingTop: '8rem',
              marginBottom: '-5rem'
            }}
          >
            Решения для роста вашего бизнеса
          </h2>
          
          <p className="text-foreground/70 max-w-3xl mx-auto mb-12" style={{ display: 'none', fontSize: '1.25rem', lineHeight: 1.8 }}>
            Каждая услуга — это инвестиция в увеличение прибыли.<br />
            Мы не просто создаем сайты и приложения, мы создаем инструменты для продаж.
          </p>
        </div>
        {serviceCategories.map((category, categoryIndex) => (
          <div key={category.id} className='mb-20'>
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center border border-primary/30">
                  <category.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    {category.title}
                  </h3>
                  <p className="text-foreground/60">{category.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className={`services__card group relative animate-fade-in-up`}
                  style={{ 
                    animationDelay: `${categoryIndex * 100 + serviceIndex}ms`,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                  onMouseMove={(e: any) => handleMouseMove(e, service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(service.id)}
                > 
                  <div className={`relative h-full p-8 rounded-3xl ${service?.category === 'combo' ? 'bg-primary/20' : 'bg-gradient-to-br from-card/80 to-card/40'} border border-primary/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.4)]`}
                  style={{
                    transform: hoveredCard === service.id
                      ? `perspective(1000px) rotateX(${(mousePos.y - 0.5) * -8}deg) rotateY(${(mousePos.x - 0.5) * 8}deg) scale(1.02)` 
                      : 'none',
                    transition: 'all 0.3s ease-out',
                  }}>
                  <div className={`absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500`}/>
                  <div className="relative z-10">
                          {/* Icon */}
                          <div className="mb-6">
                            <div className="w-14 h-14 rounded-xl bg-primary/30 flex items-center justify-center border border-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                              <service.icon size={28} className="text-primary" />
                            </div>
                          </div>

                          {/* Title & Description */}
                          <div className="mb-6">
                            <h4 className="text-foreground mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                              {service.title}
                            </h4>
                            <p className="text-foreground/60" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                              {service.description}
                            </p>
                          </div>

                          {/* Info Grid */}
                          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[#2563eb]/20">
                            <div>
                              <div className="text-primary mb-1 flex items-center gap-1.5" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                                <TrendingUp size={14} />
                                <span>ЦЕНА</span>
                              </div>
                              <div className="text-foreground" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                                {service.price} ₽
                              </div>
                            </div>
                            <div>
                              <div className="text-primary mb-1 flex items-center gap-1.5" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                                <Clock size={14} />
                                <span>СРОК</span>
                              </div>
                              <div className="text-foreground" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                                {service.duration}
                              </div>
                            </div>
                          </div>

                          {/* CTA Buttons */}
                          <div className="flex gap-3">
                            <Link
                              href={`/service/${service.id}`}
                              className="flex-1 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300"
                              aria-label={`Узнать больше о услуге: ${service.title}`}
                              tabIndex={0}
                              style={{ fontSize: '0.875rem', fontWeight: 600 }}
                            >
                              Подробнее
                            </Link>
                            <button
                              onClick={(e) => {e.stopPropagation(); onContactClick()}}
                              className="flex-1 px-4 py-2.5 rounded-xl bg-primary hover:shadow-lg hover:shadow-[#2563eb]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                              aria-label={`Заказать услугу: ${service.title}`}
                              tabIndex={0}
                              style={{ fontSize: '0.875rem', fontWeight: 700, color: '#000' }}
                            >
                              <span>Заказать</span>
                              <ArrowRight size={16} aria-hidden="true" />
                            </button>
                          </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <section className="services__cta relative mt-24 overflow-hidden animate-fade-in">
        <div className="absolute inset-0">
          <img
            src={'/images/service-2.webp'}
            alt="Modern Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
          <div className="absolute inset-0 bg-primary/30" />
        </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ffd700]/20 rounded-full blur-3xl animate-float-slow animation-delay-2000" />
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
          </div>

        <div className="services__CTA relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 items-center justify-center border-2 border-primary/40 backdrop-blur-sm hover:scale-110 transition-all duration-500 hover:rotate-12 animate-float-slow">
                  <Rocket size={48} className="text-primary" />
                </div>

                <h3 className="text-foreground mb-6 animate-fade-in-up" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2 }}>
                  Не нашли подходящую услугу?
                </h3>
                
                <p className="text-foreground/80 mb-4 text-xl animate-fade-in-up" style={{ lineHeight: 1.8, animationDelay: '0.1s' }}>
                  Мы разработаем индивидуальное решение под специфику вашего бизнеса
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Sparkles size={18} className="text-primary" />
                    <span className="text-sm">Уникальная разработка</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-foreground/30" />
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Target size={18} className="text-primary" />
                    <span className="text-sm">Под ваши задачи</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <MagneticButton
                    onClick={onContactClick}
                    className="group px-10 py-5 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl overflow-hidden hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.6)] inline-flex items-center justify-center gap-3"
                    style={{ fontSize: '1.125rem', fontWeight: 600 }}
                    magneticStrength={0.3}
                  >
                    <Rocket size={22} className="group-hover:translate-y-[-4px] transition-transform" />
                    <span className="font-bold">Обсудить проект</span>
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                  </MagneticButton>

                  <a
                    href="tel:+79605544377"
                    className="px-12 py-6 bg-transparent border-2 border-primary/50 text-foreground rounded-2xl hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
                    style={{ fontSize: '1.25rem', fontWeight: 700 }}
                  >
                    <span>Позвонить</span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}