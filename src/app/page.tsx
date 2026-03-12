import HomeClient from './HomeClient'

// Мета-теги для главной страницы
export const metadata = {
  title: 'NexusWeb - Разработка сайтов, мобильных приложений и Telegram ботов',
  description: 'Профессиональная разработка сайтов, мобильных приложений iOS/Android и Telegram ботов для ресторанов, кафе, баров и бизнеса. Создаём продающие решения под ключ.',
  keywords: 'разработка сайтов для ресторанов, создание сайта для кафе, сайт для ресторана под ключ, веб-разработка для бизнеса',
  openGraph: {
    title: 'NexusWeb - Разработка сайтов, мобильных приложений и Telegram ботов',
    description: 'Создаём продающие сайты для ресторанов, кафе и бизнеса, мобильные приложения iOS/Android и Telegram ботов',
    url: 'https://nexusweb.ru/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разработка сайтов, мобильных приложений и Telegram ботов | NexusWeb',
    description: 'Создаём премиальные продающие сайты, мобильные приложения и Telegram боты для ресторанов, кафе и бизнеса',
  },
}

export default function Home() {
  return <HomeClient />
}