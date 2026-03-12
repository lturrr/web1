'use client'

import AboutPage from '../../pages/AboutPage';
import { useLeadForm } from '../../shared/hooks';
import { LeadForm } from '../../features/LeadForm';
import Head from 'next/head';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "NexusWeb - О нашей компании",
  "description": "Узнайте больше о команде NexusWeb - профессиональной веб-студии, специализирующейся на разработке сайтов, мобильных приложений и Telegram ботов для ресторанов, кафе и бизнеса",
  "url": "https://nexusweb.ru/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "NexusWeb",
    "description": "Профессиональная веб-студия по разработке digital-решений для бизнеса",
    "url": "https://nexusweb.ru",
    "logo": "https://nexusweb.ru/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU",
      "addressLocality": "Россия"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+7-922-173-51-47",
      "email": "contact@nexusweb.ru" 
    },
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://nexusweb.ru"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "О компании",
        "item": "https://nexusweb.ru/about"
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
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+7-922-173-51-47" 
  }
}

export default function AboutClient() {
  const {handleContactClick, handleCloseForm, isLeadFormOpen} = useLeadForm();
  
  return (
    <>
    <Head>
    <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Remove hover effects on touch devices */
        @media (hover: none) {
          .group:hover .group-hover\\:opacity-30 {
            opacity: 0.2;
          }
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      </Head>
      <AboutPage onContactClick={handleContactClick}/>
      <LeadForm isOpen={isLeadFormOpen} onClose={handleCloseForm} />
    </>
  )
}