"use client";

import Header from "./header";
import HeroGradientBackground from './gardientHero'
import Hero from "./hero";
import Categories from './categories'

function LandingPageIndex() {
  return (
    <>
      <HeroGradientBackground>
        <Header />
        <Hero />
      </HeroGradientBackground>
      <section>
        <Categories/>
      </section>
    </>
  );
}

export default LandingPageIndex;
