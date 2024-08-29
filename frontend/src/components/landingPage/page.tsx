import Header from "./header";
import HeroGradientBackground from "./gardientHero";
import Hero from "./hero";
import Categories from "./categories";
import PopularServices from "./popularServices";
import WhyChooseUs from "./whyChooseUs";
import HowItWorks from "./howItWorks";
import Testimonial from "./testimonial";
import Image from "next/image";
import Newsletter from "./newsletter";
import Footer from "./footer";
import ScrollArrow from "../ui/scrollButton";

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
      <section id="whyChooseUs" className="lg:py-20 lg:pb-40 pb-[400px]">
        <WhyChooseUs />
      </section>
      <section id="howItWorks" className="pb-20">
        <HowItWorks />
      </section>
      <section id="testimonial" className="relative py-20 bg-custom-gradient">
        <Image
          className="absolute"
          src="/squares.svg"
          objectFit="cover"
          layout="fill"
          alt="bg image"
        />
        <Testimonial />
      </section>
      <section id="newsletter" className="pt-20 relative mt-72">
        <Newsletter />
        <Footer />
        <ScrollArrow/>
      </section>

    </>
  );
}

export default LandingPageIndex;
