import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import Portfolio from "../../components/home/Portfolio";
import Stats from "../../components/home/Stats";
import BackgroundAnimation from "../../components/home/BackgroundAnimation";
import Trusted from "../../components/home/Trusted";
import WhyChoose from "../../components/home/WhyChoose";
import PricingSection from "../../components/home/PricingSection";
import ContactSection from "../../components/home/ContactSection";
import FeaturedProjects from "../../components/projects/FeaturedProjects";

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "85px" }}>
        <Hero />
         

        <FeaturedProjects />


        <Services />

        <PricingSection />

        <Portfolio />

        <Stats />

        <Trusted />

        <WhyChoose />

        <ContactSection />

        <BackgroundAnimation />
      </div>

      <Footer />
    </>
  );
}

export default Home;