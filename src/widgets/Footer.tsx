import { Mail, Phone, MapPin } from 'lucide-react';
import { serviceCategories } from '../widgets/Services';
import Link from 'next/link';
interface FooterProps {
  onContactClick: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'О нас', href: '/about' },
      { label: 'Портфолио', href: '/#testimonials' },
    ],
    legal: [
      { label: 'Политика конфиденциальности', href: '/privacy' },
      { label: 'Условия использования', href: '/terms' },
    ],
  };

  const contactInfo = [
    { icon: Phone, text: '+7 (960) 554-43-77', href: 'tel:+79605544377' },
    { icon: Mail, text: 'contact@nexusweb.ru', href: 'mailto:contact@nexusweb.ru' },
    { icon: MapPin, text: 'Москва, Россия', href: 'https://yandex.ru/maps/213/moscow/?ll=37.617700%2C55.755863&z=10' },
  ];

  return (
    <footer className="footer relative bg-gradient-to-b froХюm-background to-[#0d0d14] border-t border-primary/20 pt-16 pb-8">
      <div className="footer__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="footer__brand">
            <div className="flex items-center gap-2 mb-4 transition-transform hover:scale-105 ">
              <div className="relative w-14 h-14 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:rotate-[360deg] group-hover:">
                <img 
                    src="../../../logo.svg"
                    className="absolute text-background transition-transform duration-300 w-14 h-14" 
                    style={{
                      marginTop: '.3rem',
                    }}
                    alt="NexusWeb"
                />
              </div>
              <span className="bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider"
                style={{  backgroundColor: '#BDAC59', fontSize: '2rem', fontWeight: '800' }} >
                NexusWeb
              </span>
            </div>
            <p className="text-sm text-foreground/70 mb-6">
              Премиальная разработка на чистом коде. Создаем цифровые решения, которые увеличивают продажи.
            </p>
            <button
              onClick={onContactClick}
              className="px-6 py-3 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-lg shadow-lg text-sm transition-transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.5)] active:scale-95"
              aria-label="Открыть форму для обсуждения проекта"
              tabIndex={0}
            >
              <span className='font-bold'>Обсудить проект</span>
            </button>
          </div>

          <div className="footer__links">
            <h4 className="mb-4 text-foreground">Услуги</h4>
            <ul className="space-y-3">
              {serviceCategories.map((category) => 
                category.services.map((service, index) => (
                  <li key={index}>
                  <Link
                    href={`/service/${service.id}`}
                    className="text-sm text-foreground/60 hover:text-primary transition-all hover:translate-x-1 inline-block text-left"
                    aria-label={`Перейти к услуге: ${service.id}`}
                    tabIndex={0}
                  >
                    {service.title}
                  </Link>
                </li>
                ))
              )}
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="mb-4 text-foreground">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`${link.href}`}
                    className="text-sm text-foreground/60 hover:text-primary transition-all hover:translate-x-1 inline-block text-left"
                    aria-label={`Перейти к разделу: ${link.label}`}
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-primary/10 mt-3 space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <Link
                    key={index}
                    href={`${link.href}`}
                    className="block text-xs text-foreground/50 hover:text-primary transition-all hover:translate-x-1 text-left"
                    aria-label={link.label}
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="mb-4 text-foreground">Контакты</h4>
            <ul className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-all hover:translate-x-1"
                  >
                    <contact.icon size={16} />
                    <span>{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© {currentYear} NexusWeb. Все права защищены.</p>
            <div className="flex gap-6">
              <Link
                href='/privacy' 
                className="hover:text-primary transition-colors"
                aria-label="Политика конфиденциальности"
                tabIndex={0}
              >
                Политика конфиденциальности
              </Link>
              <Link 
                href='/terms' 
                className="hover:text-primary transition-colors"
                aria-label="Условия использования"
                tabIndex={0}
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}