
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string[];
  speed?: number;
  delayBeforeDelete?: number;
  delayBeforeType?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  delayBeforeDelete = 2000,
  delayBeforeType = 500,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = text[currentIndex];
    
    if (isDeleting) {
      if (displayText.length === 0) {
        // Move to the next phrase after deleting
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % text.length);
        timeout = setTimeout(() => {}, delayBeforeType);
      } else {
        // Delete one character
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, speed / 2);
      }
    } else {
      if (displayText.length === currentText.length) {
        // Start deleting after a delay
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      } else {
        // Type one character
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, text, speed, delayBeforeDelete, delayBeforeType]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
