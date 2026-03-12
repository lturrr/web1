import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavigationProps {
  onContactClick: () => void;
}

// Хук с throttle оптимизацией
const useScroll = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = `${threshold}px`;
    sentinel.style.width = '1px';
    sentinel.style.height = '1px';
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      document.body.removeChild(sentinel);
    };
  }, [threshold]);

  return isScrolled;
};

export function Navigation({ onContactClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const isScrolled = useScroll(50);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { label: 'Портфолио', href: '/#testimonials' },
    { label: 'О нас', href: '/about' },
  ];

  return (
    <>
      <nav
        className={`navigation fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg shadow-[0_10px_40px_-10px_rgba(212,175,55,0.2)] border-b border-primary/10'
            : 'bg-transparent'
        } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        aria-label="Главное меню навигации"
      >
        <div className="navigation__container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              onClick={() => isMobileMenuOpen ? setIsMobileMenuOpen(false) : null}
              className="navigation__logo flex items-center gap-2 group transition-all duration-300 hover:scale-105"
              style={{
                transformStyle: 'preserve-3d',
              }}
              aria-label="Вернуться на главную страницу"
              tabIndex={0}
            >
              <div 
                className="relative w-14 h-14 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:rotate-[360deg]"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
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
            </Link>

            <div className="navigation__menu hidden md:flex items-center gap-8" role="menubar" aria-label="Основное меню">
            <div className="hidden md:flex items-center gap-8">
            {/* Услуги с выпадающим меню */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }}
            >
              <Link
                  href={`#services`}
                  className="navigation__link relative text-base text-foreground/80 hover:text-primary transition-all duration-300 group"
                  role="menuitem"
                  aria-label={`Перейти к разделу Услуг`}
                  tabIndex={0}
                >
                  <span className="relative z-10">Услуги</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-[#ffd700] group-hover:w-full transition-all duration-300" />
                  <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" style={{ transform: 'scale(1.2)' }} />
                </Link>

              {activeDropdown === 'services' && (
                <>
                  <div className="absolute bottom-full" style={{top: '0rem', height: '4rem', width: '10rem', left: '-3rem'}}/>
                <div className="absolute mt-2 w-72 rounded-2xl shadow-xl border border-gray-100 py-2 animate-fadeIn" style={{top: '2rem', left: '-10rem', background: '#121212'}}>
                  {/* Разработка сайтов */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubDropdown('websites')}
                  >
                    <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                      <span>Разработка сайта</span>
                      <span className="text-gray-400">→</span>
                    </div>

                    {activeSubDropdown === 'websites' && (
                      <div className="absolute left-full ml-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-fadeIn" style={{top: '-.5rem',left: '18rem', background: '#121212'}}>
                        <Link
                          href="/services/site-vizitka"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Сайт-визитка
                        </Link>
                        <Link
                          href="/services/landing"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Лендинг
                        </Link>
                        <Link
                          href="/services/corporate-site"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Корпоративный сайт
                        </Link>
                        <Link
                          href="/services/blog-site"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Сайт блога
                        </Link>
                        <Link
                          href="/services/ecommerce"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Интернет-магазин
                        </Link>
                        <Link
                          href="/services/speed-optimization"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Оптимизация скорости
                        </Link>
                        <Link
                          href="/services/site-editing"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Редактирование сайта
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Мобильные приложения */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubDropdown('mobile')}
                  >
                    <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                      <span>Разработка мобильного приложения</span>
                      <span className="text-gray-400">→</span>
                    </div>

                    {activeSubDropdown === 'mobile' && (
                      <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                        <Link
                          href="/services/ios-app"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Под iOS
                        </Link>
                        <Link
                          href="/services/android-app"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Под Android
                        </Link>
                        <Link
                          href="/services/cross-platform-app"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Под iOS и Android
                        </Link>
                        <Link
                          href="/services/web-app"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                        >
                          Веб-приложение
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Telegram боты */}
                  <Link
                    href="/services/telegram-bot"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500 transition-colors"
                  >
                    Разработка Telegram бота
                  </Link>
                </div>
                    </>
              )}
            </div>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`${item.href}`}
                  className="navigation__link relative text-base text-foreground/80 hover:text-primary transition-all duration-300 group"
                  role="menuitem"
                  aria-label={`Перейти к разделу ${item.label}`}
                  tabIndex={0}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-[#ffd700] group-hover:w-full transition-all duration-300" />
                  <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" style={{ transform: 'scale(1.2)' }} />
                </Link>
              ))}
              <button
                onClick={onContactClick}
                className="relative px-6 py-2 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.6)] active:scale-95 overflow-hidden group"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                role="menuitem"
                aria-label="Связаться с нами"
                tabIndex={0}
              >
                <span className="relative z-10 font-semibold">Связаться</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              tabIndex={0}
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`navigation__mobile md:hidden bg-card border-t border-primary/20 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="menu"
          aria-label="Мобильное меню"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                href={`${item.href}`}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                role="menuitem"
                aria-label={`Перейти к разделу ${item.label}`}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-lg shadow-lg active:scale-95"
              role="menuitem"
              aria-label="Связаться с нами"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              Связаться
            </button>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}