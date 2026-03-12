'use client'

export default function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString('ru-RU', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="terms-of-service relative min-h-screen bg-gradient-to-b from-background via-[#0d0d14] to-[#12121a] py-32">
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
            Условия использования
          </h1>
          <p className="text-foreground/70 text-lg">
            Последнее обновление: {currentDate}
          </p>
        </div>

        <div className="space-y-8 text-foreground/80" style={{ lineHeight: 1.8 }}>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Принятие условий</h2>
            <p className="mb-4">
              Настоящие Условия использования (далее — «Условия») регулируют использование веб-сайта NexusWeb (далее — «Сайт») и предоставляемых на нем услуг.
            </p>
            <p className="mb-4">
              Используя Сайт, вы подтверждаете, что прочитали, поняли и согласны соблюдать настоящие Условия. Если вы не согласны с какими-либо положениями, пожалуйста, не используйте Сайт.
            </p>
            <p className="mb-4">
              Мы оставляем за собой право изменять настоящие Условия в любое время. Продолжение использования Сайта после внесения изменений означает ваше согласие с новыми Условиями.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Описание услуг</h2>
            <p className="mb-4">
              NexusWeb предоставляет услуги по разработке:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Веб-сайтов (Landing Page, корпоративные сайты, интернет-магазины)</li>
              <li>Веб-приложений</li>
              <li>Мобильных приложений для iOS и Android</li>
              <li>Telegram-ботов</li>
              <li>SEO-продвижения</li>
              <li>Оптимизации производительности веб-ресурсов</li>
            </ul>
            <p className="mb-4">
              Конкретный объем работ, сроки и стоимость определяются индивидуально для каждого проекта и фиксируются в договоре или техническом задании.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Использование Сайта</h2>
            <p className="mb-4">
              При использовании Сайта вы обязуетесь:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Предоставлять точную и актуальную информацию</li>
              <li>Не использовать Сайт для незаконных целей</li>
              <li>Не пытаться получить несанкционированный доступ к системам</li>
              <li>Не распространять вредоносное программное обеспечение</li>
              <li>Не нарушать права интеллектуальной собственности</li>
              <li>Соблюдать применимое законодательство РФ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Заказ услуг</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">4.1. Процесс заказа</h3>
            <p className="mb-4">
              Заказ услуг осуществляется следующим образом:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4 pl-4">
              <li>Подача заявки через форму на Сайте или по контактным данным</li>
              <li>Обсуждение требований и формирование технического задания</li>
              <li>Согласование стоимости и сроков</li>
              <li>Подписание договора</li>
              <li>Внесение предоплаты</li>
              <li>Выполнение работ</li>
              <li>Сдача-приемка результата</li>
              <li>Окончательный расчет</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mb-3">4.2. Техническое задание</h3>
            <p className="mb-4">
              Техническое задание является неотъемлемой частью договора и содержит детальное описание работ, требований и ожидаемых результатов. Изменения в техническое задание вносятся по согласованию сторон и могут повлечь изменение стоимости и сроков.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Оплата</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">5.1. Стоимость услуг</h3>
            <p className="mb-4">
              Стоимость услуг определяется индивидуально на основании технического задания. Указанные на Сайте цены носят ориентировочный характер.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.2. Порядок оплаты</h3>
            <p className="mb-4">
              Если иное не указано в договоре, оплата производится поэтапно:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>30% — предоплата после подписания договора</li>
              <li>40% — после утверждения дизайна</li>
              <li>30% — после сдачи проекта</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.3. Способы оплаты</h3>
            <p className="mb-4">
              Оплата производится:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Банковским переводом (для юридических лиц)</li>
              <li>По счету (для физических лиц)</li>
              <li>Через онлайн-платежные системы</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Сроки выполнения</h2>
            <p className="mb-4">
              Сроки выполнения работ указываются в договоре или техническом задании. Сроки могут быть изменены в следующих случаях:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Изменение требований заказчика</li>
              <li>Несвоевременное предоставление необходимых материалов</li>
              <li>Технические сложности, не зависящие от исполнителя</li>
              <li>Форс-мажорные обстоятельства</li>
            </ul>
            <p className="mb-4">
              Об изменении сроков заказчик уведомляется заблаговременно.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Права и обязанности сторон</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">7.1. Обязанности исполнителя</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Выполнить работы в соответствии с техническим заданием</li>
              <li>Соблюдать согласованные сроки</li>
              <li>Информировать заказчика о ходе выполнения работ</li>
              <li>Обеспечить конфиденциальность данных</li>
              <li>Передать результат работ заказчику</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">7.2. Обязанности заказчика</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Своевременно предоставлять необходимые материалы</li>
              <li>Вносить оплату в согласованные сроки</li>
              <li>Участвовать в согласовании промежуточных результатов</li>
              <li>Принять результат работ при соответствии техническому заданию</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Интеллектуальная собственность</h2>
            <p className="mb-4">
              Все материалы, размещенные на Сайте (тексты, изображения, дизайн, код), защищены авторским правом и являются собственностью NexusWeb или используются на законных основаниях.
            </p>
            <p className="mb-4">
              Исключительные права на результат выполненных работ переходят к заказчику после полной оплаты, если иное не предусмотрено договором.
            </p>
            <p className="mb-4">
              NexusWeb сохраняет право использовать выполненные проекты в качестве примеров работ в портфолио, если иное не согласовано с заказчиком.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Гарантии и ответственность</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">9.1. Гарантии</h3>
            <p className="mb-4">
              Мы гарантируем:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Соответствие результата работ техническому заданию</li>
              <li>Бесплатное исправление выявленных ошибок в гарантийный период</li>
              <li>Техническую поддержку в течение гарантийного периода</li>
            </ul>
            <p className="mb-4">
              Гарантия не распространяется на:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Проблемы, возникшие вследствие действий третьих лиц</li>
              <li>Изменения, внесенные заказчиком самостоятельно</li>
              <li>Несовместимость с программным обеспечением третьих лиц</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">9.2. Ограничение ответственности</h3>
            <p className="mb-4">
              NexusWeb не несет ответственности за:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>Убытки, возникшие вследствие неправильного использования результата работ</li>
              <li>Потерю данных при отсутствии резервных копий</li>
              <li>Простой сайта по вине хостинг-провайдера</li>
              <li>Действия третьих лиц</li>
            </ul>
            <p className="mb-4">
              Максимальный размер ответственности ограничен суммой, уплаченной заказчиком по договору.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Конфиденциальность</h2>
            <p className="mb-4">
              Стороны обязуются сохранять конфиденциальность информации, полученной в ходе сотрудничества. Детальная информация о защите данных представлена в нашей Политике конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Расторжение договора</h2>
            <p className="mb-4">
              Договор может быть расторгнут:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
              <li>По соглашению сторон</li>
              <li>В одностороннем порядке при существенном нарушении условий</li>
              <li>По инициативе любой из сторон с уведомлением за 10 дней</li>
            </ul>
            <p className="mb-4">
              При досрочном расторжении по инициативе заказчика, оплаченные средства не возвращаются. Заказчик оплачивает фактически выполненный объем работ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Разрешение споров</h2>
            <p className="mb-4">
              Все споры и разногласия решаются путем переговоров. При невозможности достижения согласия, споры разрешаются в соответствии с законодательством Российской Федерации в судебном порядке по месту нахождения исполнителя.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Прочие условия</h2>
            <p className="mb-4">
              Настоящие Условия составлены в соответствии с законодательством Российской Федерации.
            </p>
            <p className="mb-4">
              Если какое-либо положение настоящих Условий будет признано недействительным, остальные положения сохраняют свою силу.
            </p>
            <p className="mb-4">
              Бездействие со стороны NexusWeb в случае нарушения вами Условий не лишает нас права предпринять соответствующие действия позднее.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Контактная информация</h2>
            <p className="mb-4">
              По вопросам, связанным с настоящими Условиями, обращайтесь:
            </p>
            <div className="p-6 rounded-2xl bg-card/50 border border-primary/20 space-y-2">
              <p><strong>Email:</strong> info@NexusWeb.ru</p>
              <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
              <p><strong>Адрес:</strong> Москва, Российская Федерация</p>
              <p><strong>Время работы:</strong> Пн-Пт, 10:00 - 20:00 МСК</p>
            </div>
          </section>

          <section className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground/70">
              <strong>Обратите внимание:</strong> Данные Условия использования носят общий характер. 
              Для каждого проекта заключается индивидуальный договор с детальным описанием условий сотрудничества. 
              В случае расхождений между настоящими Условиями и индивидуальным договором, приоритет имеют положения договора.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}