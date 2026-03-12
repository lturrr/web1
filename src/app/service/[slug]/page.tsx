import ServiceClient from './ServiceClient';
import { serviceMetadata, type ServiceSlug } from '../../../shared/data/serviceMetadata';

// Для статического экспорта params не Promise
interface PageParams {
  params: { slug: string }; // Убрать Promise
}

export async function generateStaticParams() {
  const slugs = Object.keys(serviceMetadata) as Array<keyof typeof serviceMetadata>;
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = params;
  const service = serviceMetadata[slug as ServiceSlug] || serviceMetadata['android'];
  
  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://nexusweb.ru/service/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
    },
  };
}

export default function Service({ params }: PageParams) {
  const { slug } = params; // Убрать await
  return <ServiceClient params={{ slug }} />;
}