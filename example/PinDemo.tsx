import React, { useState } from 'react';
import { Keypad } from 'react-number-pin-keypad';

const PinDemo: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleKeyPress = (key: string) => {
    setInput((prevInput) => prevInput + key);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800">Pin Demo</h1>
        <Keypad
          onKeyPress={handleKeyPress}
          onBackspace={handleBackspace}
          className="mx-auto"
          input={input}
          hiddenInputClassName=""
          hiddenInputDotClassName=""
          type="pin"
          maxLength={5}
        />
        <button
          onClick={() => setInput('')}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default PinDemo;
