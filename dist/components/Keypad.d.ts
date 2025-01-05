import React from 'react';
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
export declare function Keypad({ onKeyPress, onBackspace, className, input, type, maxLength, hiddenInputClassName, hiddenInputDotClassName, }: KeypadProps): React.JSX.Element;
