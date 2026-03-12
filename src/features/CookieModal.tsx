import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) {
      const styleElement = document.getElementById('cookie-modal-styles');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
      return;
    }

    const styleElement = document.createElement('style');
    styleElement.id = 'cookie-modal-styles';
    styleElement.textContent = `
      @media (min-width: 769px) {
        .floating-button, .consultationPopup {
          margin-bottom: 4rem;
        }
      }
      @media (max-width: 768px) {
        .floating-button, .consultationPopup {
          margin-bottom: 11rem;
        }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      const styleElement = document.getElementById('cookie-modal-styles');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, [isVisible]); 

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookieConsent">
      <div className="content">
        <div className="text">
          <p className="message">
            Мы используем cookies для улучшения работы сайта. Продолжая использовать наш сайт, вы соглашаетесь с{' '}
            <a href="/terms" className="link">Условиями использования</a> и{' '}
            <a href="/privacy" className="link">Политикой конфиденциальности</a>.
          </p>
        </div>
        <div className="actions">
          <button onClick={handleAccept} className="acceptButton">
            Принять
          </button>
          <button onClick={handleDecline} className="declineButton">
            Отклонить
          </button>
        </div>
      </div>
      <button onClick={handleDecline} className="closeButton" aria-label="Закрыть">
        <X size={20} />
      </button>
      
    </div>
  );
};

