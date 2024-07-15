import React, { useState, useEffect } from 'react';

const NumberAnimation = ({ start, end, duration }) => {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : 0;
    const timer = setInterval(() => {
      current += increment;
      setNumber(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <h1 className='static-data-h1'>{number}</h1>;
};

export default NumberAnimation;