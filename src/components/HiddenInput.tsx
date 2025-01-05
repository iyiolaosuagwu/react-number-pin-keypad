import React from 'react';
import { cn } from '../utils/class-name';

interface HiddenInputProps {
  length: number;
  maxLength: number;
  className?: string;
  dotClassName?: string;
}

export function HiddenInput({
  length,
  maxLength,
  className,
  dotClassName,
}: HiddenInputProps) {
  return (
    <div className={cn('flex justify-center space-x-2 mb-4', className)}>
      {Array.from({ length: maxLength }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'w-4 h-4 rounded-full',
            index < length ? 'bg-blue-300' : 'bg-black',
            dotClassName,
          )}
        />
      ))}
    </div>
  );
}
