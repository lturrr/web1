'use client'

import { 
  Code2, 
  Rocket, 
  Mail,
  Palette,
  Server,
  Users,
  Sparkles,
  Award,
  Target,
  Zap
} from 'lucide-react';

interface AboutPageProps {
  onContactClick: () => void;
}

export default function AboutPage({ onContactClick }: AboutPageProps) {
  const teamMembers = [
    {
      name: 'Сохин Сергей',
      role: 'Тимлид & Frontend Architect',
      specialization: 'Руководитель проектов, Frontend-разработчик',
      image: '/images/sergey.jpg',
      description: 'Я создаю премиальные цифровые продукты, которые не просто впечатляют внешне, а приносят измеримые результаты бизнесу. Специализируюсь на архитектуре сложных веб-приложений. Каждая деталь реализуется с фокусом на производительность, масштабируемость и безупречный пользовательский опыт. Руководя командой, я обеспечиваю высокие стандарты качества и своевременную поставку проектов, превосходящих ожидания клиентов.',
      icon: Code2,
      accent: 'from-primary via-[#ffd700] to-primary',
      email: 's@nexusweb.ru'
    },
    {
      name: 'Турков Леонид',
      role: 'Backend Lead & Client Relations',
      specialization: 'Backend-разработчик, Менеджер по работе с клиентами',
      image: '/images/leonid.jpg',
      description: 'Я строю надёжный фундамент для амбициозных проектов. Отвечаю за разработку серверной части, API, баз данных и интеграцию сторонних сервисов, включая Telegram-ботов и мобильные приложения. Мои решения работают быстро, безопасно и безотказно. Также я выступаю связующим звеном между командой и клиентами, переводя бизнес-задачи в технические решения. Это позволяет создавать продукты, которые идеально соответствуют целям бизнеса.',
      icon: Server,
      accent: 'from-[#d4af37] via-primary to-[#d4af37]',
      email: 't@nexusweb.ru'
    },
    {
      name: 'Коновалова Мария',
      role: 'Lead Designer',
      specialization: 'Веб-дизайнер, UI/UX специалист',
      image: '/images/masha.jpg',
      description: 'Я создаю визуальные истории, которые захватывают внимание и конвертируют посетителей в клиентов. Моя работа — это симбиоз эстетики и функциональности, где каждый элемент служит конкретной цели. Специализируюсь на создании премиальных интерфейсов для сайтов и мобильных приложений, которые отражают статус бренда и обеспечивают интуитивное взаимодействие. Прорабатываю всё — от типографики и анимаций до адаптивного дизайна, создавая системы, которые остаются актуальными годами.',
      icon: Palette,
      accent: 'from-[#ffd700] via-[#d4af37] to-[#ffd700]',
      email: 'm@nexusweb.ru'
    }
  ];

  const teamValues = [
    {
      icon: Target,
      title: 'Фокус на результат',
      description: 'Мы измеряем успех метриками вашего бизнеса'
    },
    {
      icon: Zap,
      title: 'Премиальное качество',
      description: 'Безупречный код и дизайн мирового уровня'
    },
    {
      icon: Users,
      title: 'Командная синергия',
      description: 'Эксперты работают как единый механизм'
    },
    {
      icon: Award,
      title: 'Полная прозрачность',
      description: 'Открытое взаимодействие на всех этапах'
    }
  ];

  return (
    <div className="about-page min-h-screen bg-gradient-to-b from-background via-[#0d0d14] to-[#12121a]">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
              <Users size={18} className="text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider">Команда мечты</span>
            </div>

            <h1 
              className="mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 50%, #ffd700 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Эксперты, создающие
              <br />
              цифровое превосходство
            </h1>

            <p className="text-foreground/80 max-w-3xl mx-auto mb-12 text-lg" style={{ lineHeight: 1.8 }}>
              Мы — сплочённая команда профессионалов, где каждый участник является экспертом в своей области.
              Вместе мы создаём премиальные решения, которые трансформируют бизнес наших клиентов
              и устанавливают новые стандарты качества в индустрии.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {teamValues.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 border border-primary/20 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/60">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`relative animate-fade-in-up ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="relative group">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    
                    <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 backdrop-blur-sm">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        
                        <div 
                          className={`absolute inset-0 bg-gradient-to-t ${member.accent} opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-500`}
                        />
                        
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      </div>
                    </div>

                    <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/60 border border-primary/30 backdrop-blur-md">
                      <member.icon size={40} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div
                  className={`animate-fade-in-up ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                    <Sparkles size={16} className="text-primary" />
                    <span className="text-sm text-primary">{member.specialization}</span>
                  </div>

                  <h2
                    className="mb-3"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {member.name}
                  </h2>

                  <p className="text-primary mb-6">{member.role}</p>

                  <p className="text-foreground/70 mb-8 leading-relaxed" style={{ lineHeight: 1.8 }}>
                    {member.description}
                  </p>

                  <div className="flex sm:flex-row gap-4 mb-6">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 px-5 py-3 bg-card/60 border border-primary/30 rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all text-foreground/80 hover:text-foreground"
                    >
                      <Mail size={18} className="text-primary" />
                      <span>{member.email}</span>
                    </a>
                    </div>

                    <button
                      onClick={onContactClick}
                      className="px-8 py-4 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-xl hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="font-semibold">Обсудить проект</span>
                      <Rocket size={20} />
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm" />
            <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl" />
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />

            <div className="relative text-center">
              <Sparkles size={48} className="text-primary mx-auto mb-6" />
              <h3
                className="mb-4"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Готовы начать сотрудничество?
              </h3>
              <p className="text-foreground/70 mb-8 text-lg max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
                Давайте обсудим ваш проект. Наша команда экспертов готова воплотить
                ваши амбиции в премиальное цифровое решение.
              </p>
              <button
                onClick={onContactClick}
                className="px-10 py-5 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-xl hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.5)] transition-all duration-300 inline-flex items-center gap-3"
                style={{ fontSize: '1.125rem', fontWeight: 600 }}
              >
                <span>Связаться с командой</span>
                <Rocket size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
