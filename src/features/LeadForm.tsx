'use client'

import { useState, useEffect } from 'react';
import { X, Send, User, Mail, Phone, MessageSquare, CheckCircle2, Sparkles, CircleX } from 'lucide-react';
import { serviceCategories } from '../widgets/Services';
import Link from 'next/link';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  service: string[];
  budget: string;
  message: string;
  agreement: boolean;
};



export function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ['Landing Page'],
    budget: 'medium',
    message: '',
    agreement: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmittedError, setIsSubmittedError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const budgets = [
    { value: 'small', label: 'До 100к' },
    { value: 'medium', label: '100-300к' },
    { value: 'large', label: 'От 300к' },
    { value: 'not-decided', label: 'Не решил' },
  ];

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://nexusweb.ru/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            services: JSON.stringify(formData.service),
            budget: formData.budget,
            about_project: formData.message
          }
        ),
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Ошибка отправки формы');
      } else {
        const result = await res.json();
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: ['Landing Page'],
            budget: 'medium',
            message: '',
            agreement: false,
          });
        }, 2500);
      }
    } catch (err) {
      console.error('Submit error:', err);
      setIsSubmittedError(true);
      setTimeout(() => {
        onClose();
        setIsSubmittedError(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: ['Landing Page'],
          budget: 'medium',
          message: '',
          agreement: false,
        });
      }, 2500);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => {
      const target = e.target as HTMLInputElement;
      const field = name;
    
      if (type === 'checkbox') {
        if (name === 'agreement') {
          return { ...prev, agreement: target.checked };
        }
        if (name === 'service') {
          const updated = target.checked
            ? [...prev.service, value]
            : prev.service.filter((item) => item !== value);
          return { ...prev, service: Array.from(new Set(updated)) };
        }
        return { ...prev, [field]: target.checked };
      }
    
      return { ...prev, [field]: target.value };
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className={`lead-form fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
      aria-describedby="lead-form-description"
    >
      <div
        className={`lead-form__backdrop absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-label="Закрыть форму"
      />

      <div
        className={`overflow-hidden lead-form__container relative w-full max-w-4xl bg-gradient-to-br from-card to-card/80 border-2 border-primary/30 rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-12 opacity-0'
        }`}
        style={{ maxHeight: '95vh' }}
      >
        <div className="overflow-y-auto overflow-x-hidden" style={{ maxHeight: '100vh' }}>
          {!isSubmitted && !isSubmittedError ? (
            <>
              <div className="lead-form__header sticky top-0 z-20 relative p-4 md:p-6 bg-gradient-to-br from-primary via-[#ffd700] to-primary">
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/20 hover:bg-background/30 flex items-center justify-center text-background backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-90"
                  aria-label="Закрыть форму"
                  tabIndex={0}
                >
                  <X size={20} aria-hidden="true" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={24} className="text-background" aria-hidden="true" />
                  <h2 id="lead-form-title" className="text-background" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', fontWeight: 800 }}>
                    Обсудим ваш проект
                  </h2>
                </div>
                <p id="lead-form-description" className="text-background/90" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                  Заполните форму — ответим в течение часа
                </p>
              </div>

              <form 
                onSubmit={handleSubmit} 
                className="lead-form__form p-4 md:p-6 space-y-6"
                aria-label="Форма обратной связи"
              >
                <div className="lead-form__field">
                  <label htmlFor="name" className="block mb-1.5 text-xs text-foreground/90">
                    Ваше имя <span className="text-primary">*</span>
                  </label>
                  <div className="relative group">
                    <User
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-14 pl-10 pr-3 py-2.5 md:py-3 bg-background/50 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40 text-sm"
                      placeholder="Иван Иванов"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="lead-form__field">
                    <label htmlFor="email" className="block mb-1.5 text-xs text-foreground/90">
                      Email <span className="text-primary">*</span>
                    </label>
                    <div className="relative group">
                      <Mail
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors"
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-14  pl-10 pr-3 py-2.5 md:py-3 bg-background/50 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40 text-sm"
                        placeholder="ivan@example.com"
                      />
                    </div>
                  </div>

                  <div className="lead-form__field">
                    <label htmlFor="phone" className="block mb-1.5 text-xs text-foreground/90">
                      Телефон <span className="text-primary">*</span>
                    </label>
                    <div className="relative group">
                      <Phone
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors"
                      />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full h-14  pl-10 pr-3 py-2.5 md:py-3 bg-background/50 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40 text-sm"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                </div>

                <div className="lead-form__field">
                  <label className="block mb-2 text-xs text-foreground/90">
                    Интересующие услуги <span className="text-primary">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {serviceCategories.map((category) => (
                      category.services.map(service => (
                        <label
                        key={service.title}
                        className={`h-14 relative flex items-center justify-center p-2.5 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.service.includes(service.title)
                            ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                            : 'border-primary/20 hover:border-primary/50 bg-background/30'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="service"
                          value={service.title}
                          checked={formData.service.includes(service.title)}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className={`text-xs text-center transition-colors ${
                          formData.service.includes(service.title) ? 'text-primary font-semibold' : 'text-foreground/70'
                        }`}>
                          {service.title}
                        </span>
                        {formData.service.includes(service.title) && (
                          <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <CheckCircle2 size={12} className="text-background" />
                          </div>
                        )}
                      </label>
                      ))                      
                    ))}
                  </div>
                </div>

                <div className="lead-form__field">
                  <label className="block mb-2 text-xs text-foreground/90">
                    Планируемый бюджет
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgets.map((budget) => (
                      <label
                        key={budget.value}
                        className={`h-14 relative flex items-center justify-center p-2.5 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.budget === budget.value
                            ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                            : 'border-primary/20 hover:border-primary/50 bg-background/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={budget.value}
                          checked={formData.budget === budget.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className={`text-xs text-center transition-colors ${
                          formData.budget === budget.value ? 'text-primary font-semibold' : 'text-foreground/70'
                        }`}>
                          {budget.label}
                        </span>
                        {formData.budget === budget.value && (
                          <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <CheckCircle2 size={12} className="text-background" />
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="lead-form__field">
                  <label htmlFor="message" className="block mb-1.5 text-xs text-foreground/90">
                    О вашем проекте
                  </label>
                  <div className="relative group">
                    <MessageSquare
                      size={16}
                      className="absolute left-3 top-3 text-foreground/40 group-focus-within:text-primary transition-colors"
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full max-h-32 pl-10 pr-3 py-2.5 bg-background/50 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-all duration-300 resize-none text-foreground placeholder:text-foreground/40 text-sm"
                      placeholder="Опишите задачи и цели проекта..."
                    />
                  </div>
                </div>

                <div className="lead-form__field">
                  <label className="flex items-start gap-2 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        required
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 rounded-md border-2 border-primary/30 peer-checked:border-primary peer-checked:bg-primary transition-all duration-300 flex items-center justify-center">
                        {formData.agreement && <CheckCircle2 size={14} className="text-background" />}
                      </div>
                    </div>
                    <span className="mt-1 text-xs text-foreground/70 group-hover:text-foreground/90 transition-colors">
                      Согласен с{' '}
                      <Link onClick={() => onClose()} href="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </Link>{' '}
                      и <a onClick={() => onClose()} href="/terms" className="text-primary hover:underline">обработкой данных</a>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.agreement}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-primary via-[#ffd700] to-primary bg-[length:200%_auto] text-background rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-102 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ fontSize: '1rem', fontWeight: 600 }}
                  aria-label={formData.agreement ? "Отправить заявку" : "Необходимо согласиться с политикой конфиденциальности"}
                  aria-disabled={!formData.agreement}
                  tabIndex={0}
                >
                  <Send size={18} aria-hidden="true" />
                  <span>Отправить заявку</span>
                </button>

                <p className="text-xs text-center text-foreground/50">
                  Ответим в течение часа (10:00 - 20:00 МСК)
                </p>
              </form>
            </>
          ) : !isSubmittedError ? (
            /* Success Message - Compact */
            <div className="lead-form__success p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-[#ffd700] flex items-center justify-center opacity-1 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.5)]">
                <CheckCircle2 size={40} className="text-background" />
              </div>
              <h3 className="text-foreground mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700 }}>
                Спасибо за заявку!
              </h3>
              <p className="text-foreground/70 max-w-md mx-auto" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Мы получили ваше сообщение и свяжемся с вами в ближайшее время для обсуждения деталей проекта.
              </p>
            </div>
          ) : (
            <div className="lead-form__success p-8 md:p-12 text-center">
              <div className="w-20 h-20 opacity-1 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-[#ffd700] flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(212,175,55,0.5)]">
                <CircleX size={40} className="text-background" />
              </div>
              <h3 className="text-foreground mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700 }}>
                Ошибка отправления!
              </h3>
              <p className="text-foreground/70 max-w-md mx-auto" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Просим свои извинения! <br/> Попробуйте связаться с нами через почту contact@nexusweb.ru
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
