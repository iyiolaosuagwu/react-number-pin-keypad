import React, { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'ghost';
    size?: 'default' | 'lg';
}
export declare const Button: React.FC<ButtonProps>;
export {};
