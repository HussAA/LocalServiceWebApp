"use client";

import React, { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
}

const HeroGradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 blur-[24px] -z-50" style={{background:"linear-gradient(90deg, rgba(169, 82, 163, 0.2) 20%, rgba(236, 161, 17, 0.1) 50%, rgba(36, 103, 12, 0.1) 100%)",}}/>
      {children}
    </div>
  );
};

export default HeroGradientBackground;


