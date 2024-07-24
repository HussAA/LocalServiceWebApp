import Header from "./header";
import HeroGradientBackground from "./gardientHero";
import Hero from "./hero";
import Categories from "./categories";
import PopularServices from "./popularServices";
import WhyChooseUs from "./whyChooseUs";
import HowItWorks from "./howItWorks";
import Testimonial from "./testimonial";
import Image from "next/image";

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
      <section className="lg:py-40 pb-[400px]">
        <WhyChooseUs />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section className="relative py-20 bg-custom-gradient">
        <Image className="absolute" src="/squares.svg" objectFit="cover" layout="fill" alt="bg image" />
        <Testimonial />
      </section>
    </>
  );
}

export default LandingPageIndex;
