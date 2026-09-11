import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/home/HeroSection";
import Stats from "../../components/home/Stats";
import ContactSection from "../../components/home/ContactSection";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "85px" }}>
        <div style={{ padding: "20px 8% 0", background: "#0f172a" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#93c5fd",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <HeroSection />

        <section className="about-page">

          <div className="container">

            <div className="section-title">
              <h2>About Gallad.Tech Platforms</h2>

              <p>
                Gallad.Tech Platforms is a modern software company helping
                businesses transform digitally through AI, websites,
                mobile apps and enterprise systems.
              </p>

            </div>

            <div className="about-grid">

              <div>

                <h3>Who We Are</h3>

                <p>
                  We build premium software solutions for businesses,
                  schools, hospitals, restaurants, startups and enterprises.
                </p>

                <p>
                  Our mission is to deliver high-quality technology with
                  modern design and outstanding user experience.
                </p>

              </div>

              <div>

                <img
                  src="/clients/galladpos.png"
                  alt="Gallad Tech"
                />

              </div>

            </div>

          </div>

        </section>

        <Stats />

        <ContactSection />

      </div>

      <Footer />
    </>
  );
}

export default About;