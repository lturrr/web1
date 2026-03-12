// Типы для метаданных
export interface ServiceMeta {
    title: string;
    description: string;
    keywords: string;
    jsonLd: {
      "@context": string;
      "@type": string;
      name: string;
      description: string;
      url: string;
      provider: {
        "@type": string;
        name: string;
        url: string;
        logo: string;
      };
      serviceType: string;
      areaServed: string;
      offers: {
        "@type": string;
        priceCurrency: string;
        priceRange: string;
      };
    };
  }
  
  // Тип для ключей сервисов
  export type ServiceSlug = 'mobile' | 'editing' | 'site-card' | 'site-bot' | 'ecommerce-combo' | 'editing-combo' | 'android' | 'ios' | 'landing' | 'corporate' | 'ecommerce' | 'optimization' | 'telegram-bot';
  
  // Типизированные объекты
  export const serviceMetadata: Record<ServiceSlug, ServiceMeta> = {
        'site-bot': {
          title: 'Разработка сайта + Telegram бот для бизнеса | NexusWeb',
          description: 'Комплексное решение: профессиональный сайт для привлечения клиентов + умный Telegram бот для автоматизации общения. Полная цифровая инфраструктура для вашего бизнеса.',
          keywords: 'разработка сайта с телеграм ботом, сайт и бот под ключ, автоматизация бизнеса, создание сайта с чат-ботом, заказать сайт и телеграм бота',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Разработка сайта + Telegram бот",
            "description": "Комплексное решение: профессиональный сайт для привлечения клиентов + умный Telegram бот для автоматизации общения",
            "url": "https://nexusweb.ru/service/site-bot",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Комплексная разработка цифровой инфраструктуры",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽"
            }
          }
        },
        'ecommerce-combo': {
          title: 'Интернет-магазин + Мобильное приложение + Telegram бот | NexusWeb',
          description: 'Полная экосистема продаж: интернет-магазин для поискового трафика, мобильное приложение для лояльных клиентов и Telegram бот для быстрых заказов. Единая система управления.',
          keywords: 'интернет магазин с приложением и ботом, полная экосистема продаж, разработка интернет магазина с мобильным приложением, мультиканальные продажи, ecommerce решение под ключ',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Интернет-магазин + Приложение + Telegram бот",
            "description": "Полная экосистема продаж: интернет-магазин, мобильное приложение и Telegram бот с единой системой управления",
            "url": "https://nexusweb.ru/service/ecommerce-combo",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Разработка полной ecommerce экосистемы",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽₽"
            }
          }
        },
        'editing-combo': {
          title: 'Редактирование сайта + Ускорение работы | NexusWeb',
          description: 'Комплексное обновление существующего сайта: современный редизайн, улучшение функциональности и значительное ускорение загрузки. Повышение конверсии и позиций в поиске.',
          keywords: 'редактирование сайта, ускорение сайта, редизайн сайта, оптимизация производительности, обновление сайта, доработка сайта под ключ',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Редактирование сайта + Ускорение",
            "description": "Комплексное обновление существующего сайта: современный редизайн, улучшение функциональности и ускорение загрузки",
            "url": "https://nexusweb.ru/service/editing-combo",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Редактирование и оптимизация сайтов",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽"
            }
          }
        },
        'android': {
          title: 'Разработка Android приложений для ресторанов и бизнеса | NexusWeb',
          description: 'Профессиональная разработка нативных Android приложений для ресторанов, кафе и бизнеса. Создаем мобильные приложения с онлайн-заказом, бронированием столиков.',
          keywords: 'разработка android приложений, создание приложения для ресторана, мобильное приложение для кафе, заказать android приложение',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Разработка Android приложений",
            "description": "Профессиональная разработка нативных Android приложений для ресторанов, кафе и бизнеса",
            "url": "https://nexusweb.ru/service/android",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Разработка мобильных приложений",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽"
            }
          }
        },
        'ios': {
          title: 'Разработка iOS приложений для ресторанов и бизнеса | NexusWeb',
          description: 'Профессиональная разработка нативных iOS приложений для ресторанов, кафе и бизнеса. Создаем приложения для iPhone и iPad с Apple Pay.',
          keywords: 'разработка ios приложений, создание приложения для iphone, мобильное приложение для кафе ios, заказать ios приложение',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Разработка iOS приложений",
            "description": "Профессиональная разработка нативных iOS приложений для ресторанов, кафе и бизнеса",
            "url": "https://nexusweb.ru/service/ios",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Разработка мобильных приложений",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽"
            }
          }
        },
        'mobile': {
  title: 'Разработка мобильных приложений на Flutter | NexusWeb',
  description: 'Профессиональная разработка кроссплатформенных приложений на Flutter для iOS и Android. Создаем приложения с нативной производительностью и единой кодовой базой.',
  keywords: 'разработка мобильных приложений, flutter разработка, кроссплатформенное приложение, создание приложения ios android, заказать мобильное приложение, flutter приложение',
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NexusWeb - Разработка мобильных приложений на Flutter",
    "description": "Профессиональная разработка кроссплатформенных приложений на Flutter для iOS и Android с нативной производительностью",
    "url": "https://nexusweb.ru/service/flutter-app",
    "provider": {
      "@type": "Organization",
      "name": "NexusWeb",
      "url": "https://nexusweb.ru",
      "logo": "https://nexusweb.ru/logo.svg"
    },
    "serviceType": "Разработка мобильных приложений",
    "areaServed": "Россия",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RUB",
      "priceRange": "₽₽₽₽"
    }
  }
        },
        'landing': {
          title: 'Разработка продающих лендингов для ресторанов и бизнеса | NexusWeb',
          description: 'Профессиональная разработка продающих лендингов для ресторанов, кафе и бизнеса. Создаем одностраничные сайты с высокой конверсией.',
          keywords: 'разработка лендинга, создание лендинг пейдж, продающий лендинг для ресторана, заказать лендинг',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Разработка лендингов",
            "description": "Профессиональная разработка продающих лендингов для ресторанов, кафе и бизнеса",
            "url": "https://nexusweb.ru/service/landing",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Разработка лендингов",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽"
            }
          }
        },
        'site-card': {
          title: 'Разработка сайта-визитки для бизнеса | NexusWeb',
          description: 'Профессиональная разработка сайтов-визиток для компаний и специалистов. Создаем многостраничные сайты с информацией об услугах, портфолио и контактами.',
          keywords: 'разработка сайта визитки, создание сайта визитки, сайт визитка для бизнеса, заказать сайт визитку, корпоративный сайт визитка, сайт представительство',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Разработка сайтов-визиток",
            "description": "Профессиональная разработка сайтов-визиток для компаний и специалистов с информацией об услугах и портфолио",
            "url": "https://nexusweb.ru/service/site-card",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Разработка сайтов-визиток",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽"
            }
          }
        },
        'corporate': {
          title: 'Разработка корпоративных сайтов для бизнеса | NexusWeb',
          description: 'Профессиональная разработка корпоративных сайтов для бизнеса. Создаем современные сайты с системой управления, интеграцией с CRM.',
          keywords: 'разработка корпоративного сайта, создание сайта для бизнеса, корпоративный сайт под ключ, заказать корпоративный сайт',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Разработка корпоративных сайтов",
            "description": "Профессиональная разработка корпоративных сайтов для бизнеса",
            "url": "https://nexusweb.ru/service/corporate",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Разработка корпоративных сайтов",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽"
            }
          }
        },
        'ecommerce': {
          title: 'Разработка интернет-магазинов для ресторанов и бизнеса | NexusWeb',
          description: 'Профессиональная разработка интернет-магазинов для ресторанов, кафе и розничного бизнеса. Создаем полнофункциональные онлайн-магазины.',
          keywords: 'разработка интернет магазина, создание интернет магазина, онлайн магазин для ресторана, заказать интернет магазин',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Разработка интернет-магазинов",
            "description": "Профессиональная разработка интернет-магазинов для ресторанов, кафе и розничного бизнеса",
            "url": "https://nexusweb.ru/service/ecommerce",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Разработка интернет-магазинов",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽"
            }
          }
        },
        'optimization': {
          title: 'Оптимизация скорости сайтов для ресторанов и бизнеса | NexusWeb',
          description: 'Профессиональная оптимизация скорости загрузки сайтов для ресторанов, кафе и бизнеса. Ускоряем загрузку страниц, улучшаем Core Web Vitals.',
          keywords: 'оптимизация скорости сайта, ускорение загрузки сайта, улучшение core web vitals, оптимизация производительности сайта',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Оптимизация скорости сайтов",
            "description": "Профессиональная оптимизация скорости загрузки сайтов для ресторанов, кафе и бизнеса",
            "url": "https://nexusweb.ru/service/optimization",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Оптимизация скорости сайтов",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽"
            }
          }
        },
        'editing': {
  title: 'Редактирование и доработка сайта | NexusWeb',
  description: 'Профессиональное обновление и улучшение существующего сайта. Редизайн, ускорение загрузки, добавление функционала и SEO оптимизация.',
  keywords: 'редактирование сайта, доработка сайта, обновление сайта, редизайн сайта, ускорение сайта, улучшение сайта, заказать доработку сайта',
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NexusWeb - Редактирование и доработка сайтов",
    "description": "Профессиональное обновление и улучшение существующего сайта: редизайн, ускорение загрузки, добавление функционала и SEO оптимизация",
    "url": "https://nexusweb.ru/service/editing",
    "provider": {
      "@type": "Organization",
      "name": "NexusWeb",
      "url": "https://nexusweb.ru",
      "logo": "https://nexusweb.ru/logo.svg"
    },
    "serviceType": "Редактирование и доработка сайтов",
    "areaServed": "Россия",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RUB",
      "priceRange": "₽₽₽"
    }
  }
        },
        'telegram-bot': {
          title: 'Разработка Telegram ботов для ресторанов и бизнеса | NexusWeb',
          description: 'Профессиональная разработка Telegram ботов для ресторанов, кафе и бизнеса. Создаем чат-боты для автоматизации заказов, бронирования столиков.',
          keywords: 'разработка telegram бота, создание чат бота, телеграм бот для ресторана, заказать telegram бота',
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NexusWeb - Разработка Telegram ботов",
            "description": "Профессиональная разработка Telegram ботов для ресторанов, кафе и бизнеса",
            "url": "https://nexusweb.ru/service/telegram-bot",
            "provider": {
              "@type": "Organization",
              "name": "NexusWeb",
              "url": "https://nexusweb.ru",
              "logo": "https://nexusweb.ru/logo.svg"
            },
            "serviceType": "Разработка Telegram ботов",
            "areaServed": "Россия",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "RUB",
              "priceRange": "₽₽₽"
            }
          }
        }
      };
  
  export const serviceNames: Record<ServiceSlug, string> = {
    'mobile' : 'Разработка под android и ios',
    'editing' : 'Редактирование и доработка сайта',
    'site-card' : 'Сайт-визитка',
    'site-bot' : 'Комбо: Это база',
    'ecommerce-combo' : 'Комбо: По-царски',
    'editing-combo': 'Комбо: Второе дыхание',
    'android': 'Android приложения',
    'ios': 'iOS приложения', 
    'landing': 'Лендинги',
    'corporate': 'Корпоративные сайты',
    'ecommerce': 'Интернет-магазины',
    'optimization': 'Оптимизация скорости',
    'telegram-bot': 'Telegram боты'
  };
  
  // Вспомогательная функция для проверки slug
  export const isValidServiceSlug = (slug: string): slug is ServiceSlug => {
    return slug in serviceMetadata;
  };