import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxScrambles?: number;
  delay?: number;
  className?: string;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?:{}|[]';

export const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  speed = 30, 
  maxScrambles = 3, 
  delay = 0,
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let timeout: ReturnType<typeof setTimeout>;
    let iteration = 0;
    
    const startScramble = () => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecrypted(true);
        }

        iteration += 1 / maxScrambles;
      }, speed);

      return () => clearInterval(interval);
    };

    timeout = setTimeout(startScramble, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, text, speed, maxScrambles, delay]);

  return (
    <p ref={containerRef} className={className}>
      {displayText || (isInView ? "" : text)}
    </p>
  );
};
