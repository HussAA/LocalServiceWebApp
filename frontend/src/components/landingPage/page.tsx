import Header from "./header";
import HeroGradientBackground from "./gardientHero";
import Hero from "./hero";
import Categories from "./categories";
import PopularServices from "./popularServices";
import WhyChooseUs from "./whyChooseUs";
import HowItWorks from "./howItWorks";

function LandingPageIndex() {
  return (
    <>
      <HeroGradientBackground>
        <Header />
        <Hero />
      </HeroGradientBackground>
      <section className="pt-20">
        <Categories />
      </section>
      <section className="py-20">
        <PopularServices />
      </section>
      <section className="py-56">
        <WhyChooseUs />
      </section>
      <section className="py-56">
        <HowItWorks />
      </section>
    </>
  );
}

export default LandingPageIndex;
