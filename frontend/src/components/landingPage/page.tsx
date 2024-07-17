"use client";

import Header from "./header";
import HeroGradientBackground from './gardientHero'
import Hero from "./hero";


function LandingPageIndex() {
  return (
    <>
      <HeroGradientBackground>
        <Header />
        <Hero />
      </HeroGradientBackground>
    </>
  );
}

export default LandingPageIndex;
