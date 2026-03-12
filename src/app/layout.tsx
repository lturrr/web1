'use client'

import '../index.css'
import { Navigation } from '../widgets/Navigation';
import { Footer } from '../widgets/Footer';
import { FloatingButton } from '../shared/UI/FloatingButton';
import { LeadForm } from '../features/LeadForm';
import { CookieModal } from '../features/CookieModal';
import { useLeadForm } from '../shared/hooks';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {isLeadFormOpen,handleContactClick, handleCloseForm} = useLeadForm();


  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml"/>

        <meta name="author" content="NexusWeb - Премиальная веб-студия"/>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#3b82f6" />
        
        <meta property="og:image" content="https://nexusweb.ru/logo.svg" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="NexusWeb" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://nexusweb.ru/logo.svg" />
        
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Россия" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');

              ym(104689976, 'init', {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
            `,
          }}
        />
      </head>
      <body>
        <div className="bg-background relative">
          <noscript>
            <div>
              <img src="https://mc.yandex.ru/watch/104689976" style={{ position: 'absolute', left: '-9999px' }} alt="Yandex Metrika" />
            </div>
          </noscript>
          <Navigation onContactClick={handleContactClick} />
          <main id="root">{children}</main>
          <Footer onContactClick={handleContactClick} />
          <FloatingButton onClick={handleContactClick} />
          <LeadForm isOpen={isLeadFormOpen} onClose={handleCloseForm} />
          <CookieModal/>
        </div>
      </body>
    </html>
  )
}