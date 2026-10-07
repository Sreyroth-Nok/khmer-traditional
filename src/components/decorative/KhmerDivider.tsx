import React from 'react';
import { KhmerFlower } from './KhmerFlower';

interface KhmerDividerProps {
  className?: string;
  color?: string;
  title?: string;
  subtitle?: string;
}

export const KhmerDivider: React.FC<KhmerDividerProps> = ({
  className = '',
  color = '#B88932',
  title,
  subtitle
}) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center my-8 ${className}`}>
      {title && (
        <div className="text-center mb-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3B2922] font-khmer flex items-center justify-center gap-3">
            <span className="text-[#B88932] text-xl">✦</span>
            {title}
            <span className="text-[#B88932] text-xl">✦</span>
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-[#3B2922]/75 font-inter mt-1 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Decorative Ornate Line Divider */}
      <div className="w-full max-w-2xl flex items-center justify-center gap-2 md:gap-4 px-4">
        {/* Left Ornate Line */}
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#B88932]/40 to-[#B88932] relative">
          <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-[#B88932]" />
        </div>

        {/* Center Khmer Flower Motif */}
        <div className="relative flex items-center justify-center px-2">
          <KhmerFlower size={32} color={color} />
        </div>

        {/* Right Ornate Line */}
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#B88932]/40 to-[#B88932] relative">
          <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-[#B88932]" />
        </div>
      </div>
    </div>
  );
};
