import React, { useState, useEffect } from 'react';

export const useCounter = () => {
  const key = 'CounterApp:count';

  const [count, setCount] = useState(() => {
    let data = window.localStorage.getItem(key);

    if (data === null) {
      return 0;
    }

    try {
      return JSON.parse(data);
    } catch (error) {
      return 0;
    }
  });

  useEffect(() => {
    let data = JSON.stringify(count);
    window.localStorage.setItem(key, data);
  }, [count]);

  const increment = () => {
    setCount((current) => current + 1);
  };

  const decrement = () => {
    setCount((current) => current - 1);
  };

  return { count, increment, decrement };
};
