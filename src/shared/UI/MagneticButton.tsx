import { useRef, useState, ReactNode, MouseEvent } from 'react';

interface MagneticButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  tabIndex?: number;
  magneticStrength?: number;
}

export function MagneticButton({ 
  children, 
  onClick, 
  className = '', 
  style = {},
  href,
  magneticStrength = 0.3 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonStyle = {
    ...style,
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s ease-out',
  };

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={className}
        style={buttonStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={className}
      style={buttonStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}