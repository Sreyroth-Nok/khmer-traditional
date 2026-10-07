import React from 'react';

interface KhmerPatternProps {
  className?: string;
  opacity?: number;
}

export const KhmerPattern: React.FC<KhmerPatternProps> = ({
  className = '',
  opacity = 0.08
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="khmer-lotus-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Symmetrical Khmer Floral Geometry */}
            <path
              d="M 30 5 C 20 15, 20 25, 30 35 C 40 25, 40 15, 30 5 Z"
              fill="#B88932"
            />
            <path
              d="M 5 30 C 15 20, 25 20, 35 30 C 25 40, 15 40, 5 30 Z"
              fill="#B88932"
            />
            <circle cx="30" cy="30" r="4" fill="#7A3030" />
            <circle cx="0" cy="0" r="3" fill="#B88932" />
            <circle cx="60" cy="0" r="3" fill="#B88932" />
            <circle cx="0" cy="60" r="3" fill="#B88932" />
            <circle cx="60" cy="60" r="3" fill="#B88932" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#khmer-lotus-pattern)" />
      </svg>
    </div>
  );
};
