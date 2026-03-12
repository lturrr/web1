'use client'

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('ru-RU', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
  return (
    <div className="privacy-policy relative min-h-screen bg-gradient-to-b from-background via-[#0d0d14] to-[#12121a] py-32">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #f5f5f7 0%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Политика конфиденциальности
          </h1>
          <p className="text-foreground/70 text-lg">
            Последнее обновление: {currentDate}
          </p>
        </div>

        <div className="space-y-8 text-foreground/80" style={{ lineHeight: 1.8 }}>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
            <p className="mb-4">
              Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сайта NexusWeb (далее — «Сайт»).
            </p>
            <p className="mb-4">
              Используя Сайт, вы соглашаетесь с условиями данной Политики. Если вы не согласны с условиями, пожалуйста, не используйте Сайт.
            </p>
            <p className="mb-4">
              Администрация Сайта обязуется соблюдать действующее законодательство РФ в области защиты персональных данных, включая Федеральный закон «О персональных данных» № 152-ФЗ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Собираемая информация</h2>
            <p className="mb-4">
              Мы можем собирать следующие категории персональных данных:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Имя и фамилия</li>
              <li>Адрес электронной почты</li>
              <li>Номер телефона</li>
              <li>Информация о компании (название, должность)</li>
              <li>IP-адрес и данные об устройстве</li>
              <li>Информация о действиях на Сайте (просмотренные страницы, время посещения)</li>
              <li>Данные, предоставленные через формы обратной связи</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Цели обработки данных</h2>
            <p className="mb-4">
              Мы используем собранную информацию для следующих целей:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Обработка запросов и обращений пользователей</li>
              <li>Предоставление информации о наших услугах</li>
              <li>Подготовка коммерческих предложений</li>
              <li>Улучшение качества сервиса и пользовательского опыта</li>
              <li>Проведение статистических исследований</li>
              <li>Отправка информационных и маркетинговых сообщений (с вашего согласия)</li>
              <li>Выполнение обязательств перед клиентами</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Правовые основания обработки</h2>
            <p className="mb-4">
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Согласия субъекта персональных данных</li>
              <li>Исполнения договора, стороной которого является субъект персональных данных</li>
              <li>Требований законодательства РФ</li>
              <li>Защиты жизни, здоровья или иных жизненно важных интересов</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Передача данных третьим лицам</h2>
            <p className="mb-4">
              Мы не передаем ваши персональные данные третьим лицам, за исключением следующих случаев:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>С вашего явного согласия</li>
              <li>Для выполнения условий договора (например, службам доставки)</li>
              <li>По требованию уполномоченных государственных органов</li>
              <li>Нашим партнерам для обработки данных от нашего имени (при условии соблюдения ими конфиденциальности)</li>
            </ul>
            <p className="mb-4">
              Мы можем использовать следующие сторонние сервисы:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Яндекс.Метрика и Google Analytics (для аналитики)</li>
              <li>CRM-системы (для управления клиентами)</li>
              <li>Email-сервисы (для рассылок)</li>
              <li>Хостинг-провайдеры (для размещения Сайта)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Защита данных</h2>
            <p className="mb-4">
              Мы применяем организационные и технические меры для защиты персональных данных:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Использование SSL-сертификата (HTTPS) для шифрования данных</li>
              <li>Ограничение доступа к персональным данным</li>
              <li>Регулярное резервное копирование</li>
              <li>Использование защищенных каналов передачи данных</li>
              <li>Обучение персонала правилам обработки персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Файлы cookie</h2>
            <p className="mb-4">
              Сайт использует файлы cookie для улучшения работы и анализа трафика. Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве.
            </p>
            <p className="mb-4">
              Мы используем следующие типы cookie:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li><strong>Необходимые:</strong> обеспечивают базовую функциональность Сайта</li>
              <li><strong>Аналитические:</strong> помогают понять, как посетители используют Сайт</li>
              <li><strong>Функциональные:</strong> запоминают ваши предпочтения</li>
              <li><strong>Маркетинговые:</strong> используются для показа релевантной рекламы</li>
            </ul>
            <p className="mb-4">
              Вы можете настроить использование cookie в своем браузере или отключить их полностью.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Ваши права</h2>
            <p className="mb-4">
              В соответствии с законодательством РФ вы имеете следующие права:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Право на доступ к своим персональным данным</li>
              <li>Право на исправление неточных данных</li>
              <li>Право на удаление данных (право на забвение)</li>
              <li>Право на ограничение обработки</li>
              <li>Право на отзыв согласия на обработку</li>
              <li>Право на получение копии данных</li>
              <li>Право на возражение против обработки</li>
            </ul>
            <p className="mb-4">
              Для реализации своих прав, пожалуйста, свяжитесь с нами по контактам, указанным ниже.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Хранение данных</h2>
            <p className="mb-4">
              Мы храним персональные данные в течение срока, необходимого для достижения целей обработки, но не дольше, чем этого требует законодательство:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Данные клиентов — в течение действия договора и 5 лет после его окончания</li>
              <li>Данные из форм обратной связи — 3 года</li>
              <li>Аналитические данные — 2 года</li>
            </ul>
            <p className="mb-4">
              По истечении срока хранения данные удаляются или обезличиваются.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Дети</h2>
            <p className="mb-4">
              Наш Сайт не предназначен для лиц младше 18 лет. Мы сознательно не собираем персональные данные от детей. Если вы являетесь родителем и обнаружили, что ваш ребенок предоставил нам персональные данные, пожалуйста, свяжитесь с нами.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Изменения в Политике</h2>
            <p className="mb-4">
              Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице. Существенные изменения вступают в силу через 10 дней после публикации.
            </p>
            <p className="mb-4">
              Рекомендуем периодически проверять эту страницу для ознакомления с возможными изменениями.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Контактная информация</h2>
            <p className="mb-4">
              Если у вас есть вопросы о нашей Политике конфиденциальности или вы хотите реализовать свои права, свяжитесь с нами:
            </p>
            <div className="p-6 rounded-2xl bg-card/50 border border-primary/20 space-y-2">
              <p><strong>Email:</strong> privacy@NexusWeb.ru</p>
              <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
              <p><strong>Адрес:</strong> Москва, Российская Федерация</p>
            </div>
          </section>

          <section className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground/70">
              <strong>Важно:</strong> Данная Политика конфиденциальности носит информационный характер. 
              Администрация Сайта не занимается сбором персональных данных для их последующей продажи или передачи. 
              Мы используем данные исключительно для улучшения качества наших услуг и взаимодействия с клиентами. 
              Сайт не предназначен для сбора особых категорий персональных данных или конфиденциальной информации.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
