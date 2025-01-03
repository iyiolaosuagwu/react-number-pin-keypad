import React from 'react';
export interface KeypadProps {
    onKeyPress: (key: string) => void;
    onBackspace: () => void;
    className?: string;
}
export declare function Keypad({ onKeyPress, onBackspace, className }: KeypadProps): React.JSX.Element;
