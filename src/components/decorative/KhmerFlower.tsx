import React from 'react';

interface KhmerFlowerProps {
  className?: string;
  size?: number;
  color?: string;
}

export const KhmerFlower: React.FC<KhmerFlowerProps> = ({
  className = '',
  size = 36,
  color = '#B88932'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
      aria-hidden="true"
    >
      {/* Central Lotus Seed Pod */}
      <circle cx="50" cy="50" r="10" fill={color} opacity="0.9" />
      <circle cx="50" cy="50" r="6" fill="#FFFDF7" opacity="0.8" />
      
      {/* 8 Symmetrical Lotus Petals (Kbach Lotus) */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
        <g key={index} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M 50 38 C 44 26, 40 12, 50 2 C 60 12, 56 26, 50 38 Z"
            fill={color}
            opacity={index % 2 === 0 ? "0.95" : "0.75"}
          />
          <path
            d="M 50 38 C 47 28, 45 18, 50 8 C 55 18, 53 28, 50 38 Z"
            fill="#E6D3A3"
            opacity="0.5"
          />
        </g>
      ))}

      {/* Decorative Outer Flame Accents */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, index) => (
        <g key={index} transform={`rotate(${angle} 50 50)`}>
          <circle cx="50" cy="18" r="2.5" fill={color} />
        </g>
      ))}
    </svg>
  );
};
