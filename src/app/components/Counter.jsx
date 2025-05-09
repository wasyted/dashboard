'use client';

import { useEffect, useState } from 'react';

const Counter = ({ target, duration = 600, decimals = 0, delay = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericTarget = parseFloat(target);
    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = +(progress * numericTarget).toFixed(decimals);
      setCount(value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, decimals, delay]);

  const formatted = count.toLocaleString('es-AR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return <span className="">{formatted}</span>;
};

export default Counter;
