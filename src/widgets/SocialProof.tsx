import { Star, TrendingUp, Quote } from 'lucide-react';
import { MagneticButton } from '../shared/UI/MagneticButton';
import { useRouter } from 'next/navigation';

interface SocialProofProps {
  onContactClick: () => void;
}
type SuccessTestimonial = {
  title: string,
  achievement: string
}
type Testimonial = {
  services: string[],
  text: string,
  href: string,
  title: string,
  success: SuccessTestimonial[],
  image: string,
  alt: string
}

export function SocialProof({ onContactClick }: SocialProofProps) {
  const router = useRouter();
  function handleCardClick(href:string) {
    window.open(`${href}`, '_blank', 'noopener,noreferrer')
  } 

  const testimonials:Testimonial[] = [
    {
      services: ['Landing Page'],
      text: 'Разработан лендинг для сервиса по сборке игровых ПК на заказ.',
      href: 'https://assemblecomputer.ru/',
      title: 'Число клиентов выросло на 63%',
      success: [{
        title: 'Бюджет',
        achievement: '80 000 ₽'
      },
      {
        title: 'Выручка',
        achievement: '163 000 ₽'
      }],
      image: 'landing-pk.webp',
      alt: 'DengerTyoma. NexusWeb'
    },
    {
      services: ['Интернет магазин', 'Landing Page'],
      text: 'Для интернет-магазина BodyPit мы реализовали цифровое сопровождение запуска их первой розничной точки.',
      href: 'https://zozg-plus.ru',
      title: 'Больше людей узнали об открытии магазина',
      success: [{
        title: 'Об открытии узнали',
        achievement: '87 человек'
      }],
      image: 'body-pit.webp',
      alt: 'BodyPit. NexusWeb'
    },
    {
      services: ['Корпоративный сайт'],
      text: 'Для косметологического центра «Академия красоты» в Обнинске мы провели комплексное обновление цифрового присутствия.',
      href: 'https://akrasota40.ru/',
      title: 'Благодаря правкам, конверсия выросла на 2.08%',
      success: [{
        title: 'Средний чек',
        achievement: '+5,13%'
      }],
      image: 'akrosta.webp',
      alt: 'Академия красоты в Обнинске. NexusWeb'
    },
    {
      services: ['Landing Page'],
      text: 'Мы разработали лендинг для привлечения курьеров. Его ключевой элемент — интеллектуальный калькулятор с интеграцией API Яндекс Еды.',
      href: 'https://ya-eda-couriers.ru/',
      title: 'Высокая конверсия засчёт упора на удобство',
      success: [{
        title: 'Бюджет',
        achievement: '180 000 ₽'
      },
      {
        title: 'Окупился',
        achievement: 'за 2,3 месяца'
      },
      {
        title: 'Конверсия',
        achievement: '3,64%'
      }],
      image: 'landing-couier.webp',
      alt: 'Курьерский лендинг. NexusWeb'
    },
    {
      services: ['Мобильное приложение'],
      text: 'Кроссплатформенное приложение для корпоративного питания. Предзаказ еды с доставкой к месту, в столовую или через постамат. Оплата картой или внутренней валютой.',
      href: 'https://rutube.ru/video/private/00b05b4873fc1c900c53cef2a4c43cb0/?p=qdYKnpOWUGj_Pitq4pdfqw',
      title: 'Приложение заняло призовое место в конкурсе от крупной компании',
      success: [{
        title: 'Да',
        achievement: 'Такое мы тоже делаем'
      }],
      image: 'mobail-app2.webp',
      alt: 'Курьерское приложение. NexusWeb'
    },
    {
      services: ['Мобильное приложение'],
      text: 'Корпоративное приложение для курьерской доставки с управлением заказами и расчетами наличными.',
      href: 'https://rutube.ru/video/private/120144a673db1c2709e6a341556b731a/?p=y4SLLOezMlkl8-Hup5hpzA',
      title: 'Управление всей логистикой с одного приложения',
      success: [{
        title: 'Эффективность доставки',
        achievement: '+35%'
      }],
      image: 'mobail-app.webp',
      alt: 'Приложение для доставки для организации. NexusWeb'
    },
    {
      services: ['Телеграм бот'],
      text: 'SpiritUpHelp_bot — это бот-диспетчер, который перенаправляет сообщения от клиентов в общий чат поддержки.',
      href: 'https://t.me/SpiritUpHelp_bot',
      title: 'С помощью бота был автоматизирован процесс управления заявками',
      success: [{
        title: 'Экономия времени',
        achievement: '1,5 часа в день'
      }],
      image: 'tgbot1.webp',
      alt: 'Телеграм бот помощник. NexusWeb'
    },

  ];


  return (
    <section id="testimonials" className="social-proof relative py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0a0a0f 0%, #0d0d14 50%, #12121a 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full mb-8 backdrop-blur-sm">
            <Star size={18} className="text-primary" />
            <span className="text-sm text-primary uppercase tracking-wider">Наши клиенты</span>
          </div>

          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Наши клиенты увеличивают продажи
          </h2>

          <p className="text-foreground/70 max-w-3xl mx-auto text-lg" style={{ lineHeight: 1.8 }}>
            Реальные результаты реальных компаний. Узнайте, как мы помогли бизнесу вырасти.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <article
             onClick={() => handleCardClick(testimonial.href)}
             key={index}
             className="group relative overflow-hidden rounded-3xl  border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)] animate-fade-in-up"
             style={{cursor: 'pointer'}}
             >
              <img src={`./images/${testimonial.image}`} alt={`${testimonial.alt}`} 
                style={{height: '8rem'}}
                className="w-full h-full object-cover transition-transform duration-700"
                loading="lazy"/>
              <div
                className="relative p-6 bg-gradient-to-br from-card/80 to-card/40"
                style={{ height: '100%' }}
              >
              <div
                  className='mb-6'
                  style={{
                    display: 'flex',
                    justifyContent: 'start',
                    flexDirection: 'row',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                    {testimonial.services.map((service, index) => (
                      <span
                        key={index} 
                        className='px-4 py-2 text-sm rounded-3xl bg-primary font-bold' 
                        style={{color: '#000'}}>{service}
                      </span>
                    ))}
                </div>
                <h4 className='text-2xl'>{testimonial.title}</h4>
                <p className="text-foreground/80 mb-6 italic" style={{ paddingTop: '1rem', lineHeight: 1.7 }}>
                  {testimonial.text}
                </p>

                <div className="pt-6 border-t border-primary/20 inline-flex"
                  style={{
                    padding: '1rem',
                    flexWrap: 'wrap',  
                    width: '100%',
                    justifyContent: 'left',
                    gap: '1.5rem'                 
                  }}
                >
                  {testimonial.success.map((item, index) => (
                      <div
                        className='flex'
                        style={{
                          flexDirection: 'column',
                          gap: '.5rem',     
                        }}>
                        <p className='text-primary text-sm font-bold'>{item.title}:</p>
                        <span className='text-sm font-bold'>{item.achievement}</span>
                      </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground/70 mb-6 text-lg">
            Хотите такие же результаты для своего бизнеса?
          </p>
          <MagneticButton
            onClick={onContactClick}
            className="group px-10 py-5 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.6)] animate-gradient-x inline-flex items-center justify-center gap-3"
            style={{ fontSize: '1.125rem', fontWeight: 600 }}
            magneticStrength={0.3}
          >
            <span className="font-bold">Обсудить мой проект</span>
            <TrendingUp size={24} className="group-hover:translate-x-2 transition-transform" />
          </MagneticButton>
        </div>
      </div>

      
    </section>
  );
}