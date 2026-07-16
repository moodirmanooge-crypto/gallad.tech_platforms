import "./Hero.css";
import FadeIn from "../animations/FadeIn";
import SlideUp from "../animations/SlideUp";
import FloatingAnimation from "../animations/FloatingAnimation";

function Hero() {
  return (
    <FadeIn>
      <section className="hero">
        <div className="hero-content">
          <SlideUp>
            <p className="hero-small">
              🚀 AI • Web • Mobile • Software
            </p>
          </SlideUp>

          <SlideUp>
            <h1 className="hero-title">
              Building The Future
              <br />
              With Artificial Intelligence
            </h1>
          </SlideUp>

          <SlideUp delay={0.2}>
            <p className="hero-description">
              We create premium AI videos,
              modern websites,
              mobile applications,
              POS systems,
              ERP software
              and powerful digital solutions.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="hero-buttons">
              <button className="primary">
                Start Project
              </button>

              <button className="secondary">
                View Portfolio
              </button>
            </div>
          </SlideUp>
        </div>
      </section>
    </FadeIn>
  );
}

export default Hero;