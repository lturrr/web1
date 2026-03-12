'use client'

import ServicePage from "../../../pages/ServicePage";
import { useLeadForm } from "../../../shared/hooks";
import { serviceMetadata, serviceNames, isValidServiceSlug } from '../../../shared/data/serviceMetadata';
import { LeadForm } from "../../../features/LeadForm";
import Head from "next/head";

// Исправленный тип
interface PageParams {
  params: { slug: string };
}

// Тип для breadcrumb
interface BreadcrumbLd {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

const breadcrumbLd = (slug: string, serviceName: string): BreadcrumbLd => ({
  "@context": "https://schema.org",
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
      "name": serviceName,
      "item": `https://nexusweb.ru/service/${slug}`
    }
  ]
});

export default function ServiceClient({ params }: PageParams) {
  const { handleContactClick, handleCloseForm, isLeadFormOpen} = useLeadForm();
  
  const service = isValidServiceSlug(params.slug) 
    ? serviceMetadata[params.slug] 
    : serviceMetadata['android'];
    
  const serviceName = isValidServiceSlug(params.slug)
    ? serviceNames[params.slug]
    : 'Услуга';

  return (
    <>
    <Head>
            <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.1; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 40px) scale(1.15); }
          66% { transform: translate(40px, -40px) scale(0.85); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, -25px) scale(1.1); }
        }

        @keyframes float-rotate {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes particle {
          0% { 
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(-200vh) scale(1);
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-gradient-slow {
          animation: gradient-slow 8s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 25s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 30s ease-in-out infinite;
        }

        .animate-float-rotate {
          animation: float-rotate 15s ease-in-out infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 40s linear infinite;
        }

        .animate-particle {
          animation: particle linear infinite;
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service.jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(params.slug, serviceName)) }}
      />
      </Head>
      <ServicePage onContactClick={handleContactClick}/>
      <LeadForm isOpen={isLeadFormOpen} onClose={handleCloseForm}/>
    </>
  )
}