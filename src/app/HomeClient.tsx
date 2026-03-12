'use client'

import HomePage from '../pages/HomePage'
import { useLeadForm } from '../shared/hooks'
import { LeadForm } from '../features/LeadForm'
import Head from 'next/head'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "NexusWeb - Премиальная веб-студия",
  "description": "Профессиональная разработка сайтов, мобильных приложений и Telegram ботов для ресторанов, кафе, баров и бизнеса",
  "url": "https://nexusweb.ru",
  "logo": "https://nexusweb.ru/logo.svg",
  "priceRange": "₽₽₽",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Россия"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Россия"
  },
  "serviceType": [
    "Разработка сайтов для ресторанов",
    "Создание сайтов для кафе и баров",
    "Веб-разработка для бизнеса",
    "Премиальный веб-дизайн",
    "SEO-оптимизация сайтов",
    "Разработка мобильных приложений iOS/Android",
    "Разработка Telegram ботов",
    "Автоматизация бизнеса через чат-ботов"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Услуги веб-разработки",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Разработка сайтов для ресторанов и кафе"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Создание лендингов для бизнеса"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Разработка мобильных приложений"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Создание Telegram ботов"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO-продвижение сайтов"
        }
      }
    ]
  }
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NexusWeb",
  "url": "https://nexusweb.ru",
  "logo": "https://nexusweb.ru/logo.svg",
  "description": "Разработка сайтов для ресторанов, мобильных приложений и Telegram ботов",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Россия"
  }
}

export default function HomeClient() {
  const {handleContactClick, isLeadFormOpen, handleCloseForm} = useLeadForm();
  
  return (
    <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      </Head>
      <HomePage onContactClick={handleContactClick}/>
      <LeadForm isOpen={isLeadFormOpen} onClose={handleCloseForm} />
    </>
  )
}