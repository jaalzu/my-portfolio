"use client";

import { useState } from "react";

interface HoverTextProps {
  originalText: string;
  hoverText: string;
  className?: string;
}

export default function HoverText({ originalText, hoverText, className = "" }: HoverTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{`
        .hover-text {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
        }

        .hover-text-content {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
        }

        .hover-text:hover .hover-text-content {
          opacity: 0;
          filter: blur(10px);
          transform: translateY(-10px);
        }

        .hover-text-hidden {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%) translateY(10px);
          opacity: 0;
          filter: blur(10px);
          transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
          white-space: nowrap;
        }

        .hover-text:hover .hover-text-hidden {
          opacity: 1;
          filter: blur(0);
          transform: translateY(-50%) translateY(0);
        }

        .flag {
          width: 18px;
          height: auto;
          display: inline-block;
        }
      `}</style>

      <span 
        className={`hover-text ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="hover-text-content">
          {originalText}
          <img src="/ar.svg" alt="Argentina flag" className="flag" />
        </span>
        <span className="hover-text-hidden">
          {hoverText}
        </span>
      </span>
    </>
  );
}