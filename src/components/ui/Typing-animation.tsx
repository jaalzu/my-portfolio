"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  words: string[];
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  words,
  duration = 100,
  className,
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        } else {
          // Pausar antes de borrar
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        // Borrando
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          // Pasar a la siguiente palabra
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? duration / 2 : duration);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, currentWordIndex, words, duration]);

  return (
    <span className={cn("inline-block tech-animation", className)} style={{ color: 'var(--color-primary)'  }}>
      {displayedText}
    </span>
  );
}

