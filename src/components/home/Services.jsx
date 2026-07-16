import "./Services.css";
import { Link } from "react-router-dom";
import ScrollReveal from "../animations/ScrollReveal";
import FadeIn from "../animations/FadeIn";
import HoverGlow from "../animations/HoverGlow";
import SlideUp from "../animations/SlideUp";
import {
  FaRobot,
  FaGlobe,
  FaMobileAlt,
  FaCashRegister,
  FaPalette,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    desc: "AI Videos, AI Automation, AI Chatbots",
    path: "/services/ai-solutions",
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    desc: "Modern React Websites & Dashboards",
    path: "/services/web-development",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Android & iOS Apps using Flutter",
    path: "/services/mobile-apps",
  },
  {
    icon: <FaCashRegister />,
    title: "POS Systems",
    desc: "Restaurant, Pharmacy & Shop POS",
    path: "/services/pos-system",
  },
  {
    icon: <FaPalette />,
    title: "Brand Identity",
    desc: "Logo, Posters & UI/UX Design",
    path: "/services/brand-identity",
  },
  {
    icon: <FaServer />,
    title: "Custom Software",
    desc: "ERP, School & Business Systems",
    path: "/services/custom-software",
  },
];

function Services() {
  return (
    <ScrollReveal>
      <section className="services">
        <FadeIn>
          <h2>Our Services</h2>
        </FadeIn>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <HoverGlow>
                <div className="service-card">
                  <SlideUp>
                    <div className="icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </SlideUp>
                </div>
              </HoverGlow>
            </Link>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Services;