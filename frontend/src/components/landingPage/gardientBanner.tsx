"use client";

import React, { ReactNode } from "react";

interface BannerGradientBackgroundProps {
  children: ReactNode;
}

const BannerGradient: React.FC<BannerGradientBackgroundProps> = ({ children }) => {
    return (
      <span className="relative">
        <span
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(236, 161, 17, 0.41) 0%, rgba(151, 215, 177, 0.28) 88%)',
          }}
        ></span>
          {children}
        
      </span>
    );
  };
  
  export default BannerGradient;