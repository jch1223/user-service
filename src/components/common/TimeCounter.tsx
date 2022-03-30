import { HTMLAttributes, useEffect, useRef, useState } from 'react';

interface TimeCounterProps extends HTMLAttributes<HTMLSpanElement> {
  millisecond: number;
}

function TimeCounter({ millisecond, className }: TimeCounterProps) {
  const count = useRef(millisecond);
  const [timeRemaining, setTimeRemaining] = useState(convertTime(millisecond));

  useEffect(() => {
    const intervalId = setInterval(() => {
      count.current = count.current - 1000;
      setTimeRemaining(convertTime(count.current));

      if (count.current <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span className={className || ''}>{timeRemaining}</span>;
}

function convertTime(millisecond: number) {
  let minute = String(Math.floor(millisecond / 1000 / 60));
  let second = String((millisecond / 1000) % 60);

  function twoDigit(string: string) {
    return `${string.length === 1 ? `0${string}` : string}`;
  }

  return `${twoDigit(minute)}:${twoDigit(second)}`;
}

export default TimeCounter;
