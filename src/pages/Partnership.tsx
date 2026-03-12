import { useState } from 'react';
import { Calculator, Users, TrendingUp, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

export default function PartnerPage() {
  const [clientsPerMonth, setClientsPerMonth] = useState(5);
  const [selectedService, setSelectedService] = useState('landing');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Расчёт прибыли партнёра
  const serviceCommissions: { [key: string]: { price: number; commission: number } } = {
    landing: { price: 50000, commission: 0.15 },
    website: { price: 150000, commission: 0.15 },
    webapp: { price: 300000, commission: 0.15 },
    mobile: { price: 400000, commission: 0.15 },
    telegram: { price: 80000, commission: 0.15 },
  };

  const selectedCommission = serviceCommissions[selectedService];
  const monthlyIncome = clientsPerMonth * selectedCommission.price * selectedCommission.commission;
  const yearlyIncome = monthlyIncome * 12;

  const services = [
    { id: 'landing', name: 'Лендинг', price: '50 000 ₽' },
    { id: 'website', name: 'Многостраничный сайт', price: '150 000 ₽' },
    { id: 'webapp', name: 'Веб-приложение', price: '300 000 ₽' },
    { id: 'mobile', name: 'Мобильное приложение', price: '400 000 ₽' },
    { id: 'telegram', name: 'Telegram бот', price: '80 000 ₽' },
  ];

  const advantages = [
    { icon: TrendingUp, title: 'До 15% от стоимости проекта', description: 'Получайте фиксированный процент с каждого успешного проекта' },
    { icon: Users, title: 'Ваши клиенты — ваши навсегда', description: 'Вы получаете процент и с последующих заказов вашего клиента' },
    { icon: CheckCircle, title: 'Прозрачность выплат', description: 'Отслеживайте статус проектов и выплат в личном кабинете' },
  ];

  const steps = [
    { number: '01', title: 'Приглашаете нового клиента', description: 'Расскажите о наших услугах вашим знакомым бизнесменам' },
    { number: '02', title: 'Он делает свой первый заказ', description: 'Клиент оформляет любую услугу из нашего каталога' },
    { number: '03', title: 'Выполняем первые 5 заказов', description: 'Мы качественно выполняем проекты для вашего клиента' },
    { number: '04', title: 'Начинаете получать выплаты', description: 'С 6-го заказа вы получаете до 15% от стоимости каждого проекта' },
  ];

  const faqItems = [
    {
      question: 'Как быстро я начну зарабатывать?',
      answer: 'Вы начинаете зарабатывать с 6-го заказа приведённого вами клиента. Первые 5 заказов необходимы для компенсации маркетинговых затрат и адаптации клиента.',
    },
    {
      question: 'Какой процент я буду получать?',
      answer: 'Вы получаете до 15% от стоимости каждого проекта вашего клиента. Точный процент зависит от типа проекта и его объёма.',
    },
    {
      question: 'Как будут происходить выплаты?',
      answer: 'Выплаты происходят ежемесячно на вашу карту или расчётный счёт после завершения проекта и получения оплаты от клиента. Вы можете отслеживать все выплаты в личном кабинете партнёра.',
    },
    {
      question: 'Нужно ли мне разбираться в веб-разработке?',
      answer: 'Нет, от вас требуется только рекомендовать наши услуги. Всю техническую работу, общение с клиентом и выполнение проектов берём на себя мы.',
    },
    {
      question: 'Могу ли я привести несколько клиентов?',
      answer: 'Да, вы можете привести неограниченное количество клиентов. За каждого клиента вы будете получать отдельные выплаты.',
    },
    {
      question: 'Что делать, если мой клиент недоволен?',
      answer: 'Мы гарантируем качество наших услуг и всегда идём навстречу клиентам. В случае возникновения проблем, мы их решим — это не повлияет на ваши выплаты.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm text-primary">Партнёрская программа NexusWeb</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl leading-tight">
                Получайте до{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffd700]">
                  68 000 ₽
                </span>
                <br />
                за каждого клиента
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-xl">
                Рекомендуйте наши услуги и получайте стабильный доход. Чем больше клиентов — тем выше ваш заработок.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#calculator"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-lg transition-all hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)] flex items-center gap-2"
                >
                  Рассчитать доход
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#howto"
                  className="px-8 py-4 bg-secondary border border-primary/20 rounded-lg transition-all hover:scale-105 hover:border-primary/40"
                >
                  Как начать
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2MjMzMDU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partnership"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Калькулятор дохода
            </h2>
            <p className="text-xl text-foreground/70">
              Рассчитайте свой потенциальный доход с партнёрской программой
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-card border border-primary/20 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="space-y-8">
              {/* Service Selection */}
              <div>
                <label className="block mb-4 text-lg">Выберите услугу</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedService === service.id
                          ? 'border-primary bg-primary/10'
                          : 'border-primary/20 hover:border-primary/40'
                      }`}
                    >
                      <div className="text-left">
                        <div className="mb-1">{service.name}</div>
                        <div className="text-sm text-foreground/60">от {service.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clients Slider */}
              <div>
                <label className="block mb-4 text-lg">
                  Количество клиентов в месяц: <span className="text-primary">{clientsPerMonth}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={clientsPerMonth}
                  onChange={(e) => setClientsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${(clientsPerMonth / 20) * 100}%, #2a2a35 ${(clientsPerMonth / 20) * 100}%, #2a2a35 100%)`,
                  }}
                />
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-primary/20">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/20">
                  <div className="text-sm text-foreground/60 mb-2">Доход в месяц</div>
                  <div className="text-3xl text-primary">
                    {monthlyIncome.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/20">
                  <div className="text-sm text-foreground/60 mb-2">Доход в год</div>
                  <div className="text-3xl text-primary">
                    {yearlyIncome.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
              </div>

              <div className="pt-4 text-sm text-foreground/60 text-center">
                * Расчёт приблизительный и зависит от стоимости конкретных проектов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-foreground/70">
              Простая схема партнёрства с NexusWeb
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758876202014-6b2062bed4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHdvcmslMjBzdWNjZXNzfGVufDF8fHx8MTc2MjM3MzkwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="How it works"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#ffd700] flex items-center justify-center text-background">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{step.title}</h3>
                      <p className="text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Link Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-card to-secondary border border-primary/20 rounded-2xl p-12 text-center shadow-2xl">
            <div className="mb-6">
              <div className="inline-block p-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl">
                <Calculator size={48} className="text-primary" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Выберите услугу для клиента
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Познакомьтесь с нашими услугами, чтобы лучше рекомендовать их своим клиентам
            </p>
            <a
              href="https://nexusweb.ru/#services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-lg transition-all hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)]"
            >
              Посмотреть все услуги
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Сотрудничать с нами просто и выгодно
            </h2>
            <p className="text-xl text-foreground/70">
              Наши преимущества для партнёров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.3)]"
                >
                  <div className="mb-6">
                    <div className="inline-block p-4 bg-gradient-to-br from-primary/20 to-transparent rounded-xl">
                      <Icon size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3">{advantage.title}</h3>
                  <p className="text-foreground/70">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section id="howto" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Как начать сотрудничество
            </h2>
            <p className="text-xl text-foreground/70">
              Выберите удобный для вас вариант регистрации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Self-employed */}
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
              <h3 className="text-2xl mb-6">Если вы самозанятый</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    1
                  </div>
                  <p className="text-foreground/80">Зарегистрируйтесь в системе</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    2
                  </div>
                  <p className="text-foreground/80">Укажите персональные данные</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    3
                  </div>
                  <p className="text-foreground/80">Зайдите в личный кабинет</p>
                </div>
              </div>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-lg transition-all hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)]">
                Регистрация для самозанятых
              </button>
            </div>

            {/* Business */}
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
              <h3 className="text-2xl mb-6">Если у вас ИП или ООО</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    1
                  </div>
                  <p className="text-foreground/80">Оставьте заявку</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    2
                  </div>
                  <p className="text-foreground/80">Мы с вами свяжемся</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    3
                  </div>
                  <p className="text-foreground/80">Подпишем договор и начнём работу</p>
                </div>
              </div>
              <button className="w-full px-8 py-4 bg-background border-2 border-primary rounded-lg transition-all hover:scale-105 hover:bg-primary/10">
                Регистрация для ИП и ООО
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-foreground/70">
              Ответы на популярные вопросы о партнёрской программе
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary/40 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-primary transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-foreground/70">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-card to-secondary border border-primary/20 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Готовы начать зарабатывать?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Присоединяйтесь к партнёрской программе NexusWeb сегодня
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#howto"
                className="px-8 py-4 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-lg transition-all hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)]"
              >
                Стать партнёром
              </a>
              <a
                href="https://nexusweb.ru/#services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-secondary border border-primary/20 rounded-lg transition-all hover:scale-105 hover:border-primary/40"
              >
                Узнать больше об услугах
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
