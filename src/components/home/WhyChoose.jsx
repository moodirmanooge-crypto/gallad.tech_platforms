import "./WhyChoose.css";

import {
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaPalette,
  FaBolt,
  FaRobot,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    desc: "Projects delivered on time with professional quality.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Systems",
    desc: "Modern, secure and scalable software architecture.",
  },
  {
    icon: <FaPalette />,
    title: "Premium UI/UX",
    desc: "Beautiful interfaces with smooth user experience.",
  },
  {
    icon: <FaRobot />,
    title: "AI Powered",
    desc: "AI automation, chatbots and intelligent solutions.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Continuous support whenever you need assistance.",
  },
  {
    icon: <FaBolt />,
    title: "High Performance",
    desc: "Optimized systems for speed and reliability.",
  },
];

function WhyChoose() {
  return (
    <section className="why">

      <h2>Why Choose GalladTech?</h2>

      <div className="why-grid">

        {features.map((item, index) => (

          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChoose;