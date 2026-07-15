import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-small">
          🚀 AI • Web • Mobile • Software
        </p>

        <h1>
          Building The Future
          <br />
          With Artificial Intelligence
        </h1>

        <p className="hero-description">

          We create premium AI videos,
          modern websites,
          mobile applications,
          POS systems,
          ERP software
          and powerful digital solutions.

        </p>

        <div className="hero-buttons">

          <button className="primary">
            Start Project
          </button>

          <button className="secondary">
            View Portfolio
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;