import AboutClient from './AboutClient';

// Мета-теги для страницы "О нас"
export const metadata = {
  title: 'О компании NexusWeb - Наша команда',
  description: 'Команда NexusWeb: профессиональные разработчики, дизайнеры и маркетологи. Создаём digital-решения для ресторанов, кафе и бизнеса.',
  keywords: 'о компании NexusWeb, наша команда разработчиков, веб-студия о нас, философия веб-разработки',
  openGraph: {
    title: 'О компании NexusWeb - Наша команда и философия работы',
    description: 'Узнайте о команде NexusWeb - профессиональных разработчиков, создающих digital-решения для ресторанoв, кафе и бизнеса',
    url: 'https://nexusweb.ru/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'О компании NexusWeb - Наша команда и философия',
    description: 'Профессиональная команда разработчиков NexusWeb. Создаём сайты, мобильные приложения и Telegram боты для бизнеса',
  },
}

export default function About() {
  return <AboutClient />
}