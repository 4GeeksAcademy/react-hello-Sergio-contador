import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const Prueba = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 999999) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [count]);

  const getDigits = (num) => {
    return num.toString().padStart(6, '0').split('');
  };

  const digits = getDigits(count);

  return (
    <div className="flex items-center space-x-1 bg-black p-4 rounded-md w-fit">
      <div className="bg-black text-white text-3xl p-4 rounded-md border border-gray-800 flex justify-center items-center w-14 h-20">
        <Clock size={32} />
      </div>
      {digits.map((digit, index) => (
        <div
          key={index}
          className="bg-black text-white text-4xl font-mono p-4 rounded-md border border-gray-800 w-14 h-20 flex items-center justify-center"
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default Prueba;