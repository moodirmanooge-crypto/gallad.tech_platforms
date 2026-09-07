import "./Services.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import FadeIn from "../animations/FadeIn";
import HoverGlow from "../animations/HoverGlow";
import SlideUp from "../animations/SlideUp";
import { subscribeToCollection } from "../../firebase/homeContent";
import {
  FaRobot,
  FaGlobe,
  FaMobileAlt,
  FaCashRegister,
  FaPalette,
  FaServer,
} from "react-icons/fa";

// Icon name -> component map (Firestore stores the icon as a string)
const ICONS = {
  FaRobot: <FaRobot />,
  FaGlobe: <FaGlobe />,
  FaMobileAlt: <FaMobileAlt />,
  FaCashRegister: <FaCashRegister />,
  FaPalette: <FaPalette />,
  FaServer: <FaServer />,
};

// Original hardcoded services, used as a fallback until Firestore has data.
const defaultServices = [
  {
    icon: "FaRobot",
    title: "AI Solutions",
    desc: "AI Videos, AI Automation, AI Chatbots",
    path: "/services/ai-solutions",
  },
  {
    icon: "FaGlobe",
    title: "Web Development",
    desc: "Modern React Websites & Dashboards",
    path: "/services/web-development",
  },
  {
    icon: "FaMobileAlt",
    title: "Mobile Apps",
    desc: "Android & iOS Apps using Flutter",
    path: "/services/mobile-apps",
  },
  {
    icon: "FaCashRegister",
    title: "POS Systems",
    desc: "Restaurant, Pharmacy & Shop POS",
    path: "/services/pos-system",
  },
  {
    icon: "FaPalette",
    title: "Brand Identity",
    desc: "Logo, Posters & UI/UX Design",
    path: "/services/brand-identity",
  },
  {
    icon: "FaServer",
    title: "Custom Software",
    desc: "ERP, School & Business Systems",
    path: "/services/custom-software",
  },
];

function Services() {
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    const unsubscribe = subscribeToCollection("services", (items) => {
      if (items.length > 0) {
        setServices(items);
      } else {
        setServices(defaultServices);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ScrollReveal>
      <section className="services">
        <FadeIn>
          <h2>Our Services</h2>
        </FadeIn>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              key={service.id || index}
              to={service.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <HoverGlow>
                <div className="service-card">
                  <SlideUp>
                    <div className="icon">
                      {ICONS[service.icon] || <FaRobot />}
                    </div>
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