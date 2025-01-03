import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/class-name';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'default' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-md font-medium transition-colors',
        variant === 'default' ? 'bg-blue-500 text-white hover:bg-blue-600' : '',
        variant === 'ghost' ? 'bg-transparent hover:bg-gray-100' : '',
        size === 'default' ? 'px-4 py-2 text-sm' : '',
        size === 'lg' ? 'px-6 py-3 text-base' : '',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
