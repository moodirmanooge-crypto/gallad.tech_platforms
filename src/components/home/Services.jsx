import "./Services.css";
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
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    desc: "Modern React Websites & Dashboards",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Android & iOS Apps using Flutter",
  },
  {
    icon: <FaCashRegister />,
    title: "POS Systems",
    desc: "Restaurant, Pharmacy & Shop POS",
  },
  {
    icon: <FaPalette />,
    title: "Brand Identity",
    desc: "Logo, Posters & UI/UX Design",
  },
  {
    icon: <FaServer />,
    title: "Custom Software",
    desc: "ERP, School & Business Systems",
  },
];

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;