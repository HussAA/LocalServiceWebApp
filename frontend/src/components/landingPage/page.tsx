import Header from "./header";
import HeroGradientBackground from './gardientHero'
import Hero from "./hero";
import Categories from './categories'
import PopularServices from "./popularServices";
import WhyChooseUs from "./whyChooseUs";

function LandingPageIndex() {
  return (
    <>
      <HeroGradientBackground>
        <Header />
        <Hero />
      </HeroGradientBackground>
      <section className="pt-20">
        <Categories/>
      </section>
      <section className="py-20">
        <PopularServices/>
      </section>
      <section className="py-56">
      <WhyChooseUs/>
      </section>
    </>
  );
}

export default LandingPageIndex;
