import React from 'react';
import { cn } from '../utils/class-name';
import { ChevronLeft } from 'lucide-react';
import { Button } from './Button';
import { HiddenInput } from './HiddenInput';

export interface KeypadProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  className?: string;
  input?: string;
  type?: 'default' | 'pin';
  maxLength?: number;
  hiddenInputClassName?: string;
  hiddenInputDotClassName?: string;
}

export function Keypad({
  onKeyPress,
  onBackspace,
  className,
  input = '',
  type = 'default',
  maxLength = 4,
  hiddenInputClassName,
  hiddenInputDotClassName,
}: KeypadProps) {
  const keys = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    type === 'pin' ? '' : '.',
    '0',
    'backspace',
  ];

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      onBackspace();
    } else if (type === 'pin' && input.length >= maxLength) {
      return;
    } else {
      onKeyPress(key);
    }
  };

  return (
    <div>
      {type === 'pin' && (
        <HiddenInput
          length={input.length}
          maxLength={maxLength}
          className={hiddenInputClassName}
          dotClassName={hiddenInputDotClassName}
        />
      )}
      <div className={cn('grid grid-cols-3 gap-2', className)}>
        {keys.map((key) => (
          <Button
            key={key}
            variant="ghost"
            size="lg"
            onClick={() => handleKeyPress(key)}
            className={cn(
              'h-14 text-xl font-medium rounded-xl hover:bg-transparent flex items-center justify-center',
              key === 'backspace' ? 'text-base' : '',
            )}
          >
            {key === 'backspace' ? (
              <ChevronLeft size={20} strokeWidth={3} />
            ) : (
              key
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}
