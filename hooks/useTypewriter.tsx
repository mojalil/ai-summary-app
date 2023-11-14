import { useEffect, useState, useRef } from 'react';

const useTypewriter = (message: string, speed: number = 100) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const index = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedMessage((prev) => prev + message.charAt(index.current));
      index.current += 1;
      if (index.current === message.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [message, speed]);

  return displayedMessage;
};


export default useTypewriter;