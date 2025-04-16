import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  delay?: number;
  startDelay?: number;
  loop?: boolean;
}

export const useTypewriter = ({
  text,
  delay = 100,
  startDelay = 0,
  loop = false
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      const typeNextChar = (currentText: string) => {
        if (currentText.length < text.length) {
          const nextChar = text[currentText.length];
          setDisplayText(currentText + nextChar);
          timeoutId = setTimeout(() => typeNextChar(currentText + nextChar), delay);
        } else {
          setIsComplete(true);
          if (loop) {
            timeoutId = setTimeout(() => {
              setDisplayText('');
              setIsComplete(false);
              startTyping();
            }, delay * 3);
          }
        }
      };

      typeNextChar('');
    };

    timeoutId = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeoutId);
  }, [text, delay, startDelay, loop]);

  return { displayText, isComplete };
};