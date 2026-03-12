import { 
  Shield, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import { MagneticButton } from '../shared/UI/MagneticButton';

interface WhyUsProps {
  onContactClick: () => void;
}

export function WhyUs({ onContactClick }: WhyUsProps) {
  const advantages = [
    {
      icon: Shield,
      title: 'Код без CMS',
      description: 'Разработка на чистом коде без WordPress, Tilda и других конструкторов',
      benefits: [
        'В 10 раз выше безопасность',
        'Полный контроль над функционалом',
        'Никаких ограничений платформы'
      ],
      color: 'from-[#d4af37] to-[#ffd700]'
    },
    {
      icon: Zap,
      title: 'Максимальная скорость',
      description: 'Lighthouse 95+ баллов. Оптимизация каждого байта кода',
      benefits: [
        'Загрузка менее 1 секунды',
        'Core Web Vitals в зеленой зоне',
        'Минимальное потребление ресурсов'
      ],
      color: 'from-[#ffd700] to-[#ffed4e]'
    },
    {
      icon: Target,
      title: 'Фокус на конверсию',
      description: 'Каждый элемент спроектирован для увеличения продаж',
      benefits: [
        'Проработка клиентского пути',
        'A/B тестирование гипотез',
        'Психология восприятия'
      ],
      color: 'from-[#b8860b] to-[#d4af37]'
    },
    {
      icon: TrendingUp,
      title: 'Рост продаж',
      description: 'Средний рост конверсии у наших клиентов составляет 180-280%',
      benefits: [
        'Увеличение лидов в 3+ раза',
        'Снижение стоимости привлечения',
        'Рост среднего чека на 40%'
      ],
      color: 'from-[#d4af37] to-[#b8860b]'
    },
  ];

  const stats = [
    {
      icon: Rocket,
      value: '30+',
      label: 'Успешных проектов',
      description: 'Реализовали сайты для бизнеса в 15+ нишах'
    },
    {
      icon: Users,
      value: '95%',
      label: 'Довольных клиентов',
      description: 'Возвращаются за расширением функционала'
    },
    {
      icon: Award,
      value: '5 лет',
      label: 'На рынке',
      description: 'Экспертиза в веб-разработке и маркетинге'
    },
    {
      icon: TrendingUp,
      value: 'x3',
      label: 'Средний рост продаж',
      description: 'У наших клиентов после запуска сайта'
    },
  ];

  return (
    <section className="why-us relative pb-32" style={{ background: 'linear-gradient(to bottom, #12121a 0%, #0d0d14 50%, #0a0a0f 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className="mb-6 animate-fade-in-up"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Почему выбирают нас
          </h2>

          <p className="text-foreground/70 max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ fontSize: '1.25rem', lineHeight: 1.8, animationDelay: '0.2s' }}>
            Мы не просто делаем сайты и приложения — мы создаем инструменты для роста вашего бизнеса.
            Вот что отличает нашу работу от конкурентов.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.4)] animate-fade-in-up"
                style={{ 
                  animationDelay: `${0.3 + index * 0.1}s`,
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  card.style.transform = `perspective(1000px) rotateY(${(e.clientX - centerX) / 20}deg) rotateX(${-(e.clientY - centerY) / 20}deg) translateZ(20px) translateY(-10px)`;
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  card.style.transform = `perspective(1000px) rotateY(${(e.clientX - centerX) / 20}deg) rotateX(${-(e.clientY - centerY) / 20}deg) translateZ(20px) translateY(-10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0) translateY(0)';
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 mx-auto transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <stat.icon size={28} className="text-primary" style={{ transform: 'translateZ(10px)' }} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110" style={{ transform: 'translateZ(15px)' }}>{stat.value}</div>
                <div className="font-semibold text-foreground mb-2" style={{ transform: 'translateZ(10px)' }}>{stat.label}</div>
                <div className="text-sm text-foreground/60" style={{ transform: 'translateZ(5px)' }}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.4)] animate-fade-in-up"
              style={{ 
                animationDelay: `${0.6 + index * 0.15}s`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) translateZ(20px) translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) translateZ(0) translateY(0)';
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`} />

              <div className="relative z-10">
                <div 
                  className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.color} items-center justify-center mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg]`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <advantage.icon 
                    size={32} 
                    className="text-background transition-transform duration-500 group-hover:scale-110" 
                    style={{ transform: 'translateZ(10px)' }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-black/20 blur-md" style={{ transform: 'translateZ(-5px)' }} />
                </div>

                <h3 className="text-foreground mb-3">{advantage.title}</h3>
                <p className="text-foreground/70 mb-6" style={{ lineHeight: 1.7 }}>
                  {advantage.description}
                </p>

                <ul className="space-y-3">
                  {advantage.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground/70 mb-8 text-lg">
            Готовы увеличить продажи с помощью премиальной разработки?
          </p>
          <MagneticButton
            onClick={onContactClick}
            className="group px-10 py-5 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.5)] animate-gradient-x inline-flex items-center justify-center gap-3"
            style={{ fontSize: '1.125rem', fontWeight: 600 }}
            magneticStrength={0.3}
          >
            <span className="font-bold">Обсудить проект бесплатно</span>
            <Rocket size={24} className="group-hover:translate-x-2 transition-transform" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}