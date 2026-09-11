import "./PricingSection.css";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import {
  FaVideo,
  FaGlobe,
  FaMobileAlt,
  FaCashRegister,
  FaCrown,
  FaHeadset,
  FaShieldAlt,
  FaBolt,
  FaUsers,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import OrderModal from "../orders/OrderModal";
import { subscribeToCollection } from "../../firebase/homeContent";
import AnimatedHeading from "../animations/AnimatedHeading";
import CornerReveal from "../animations/CornerReveal";
import SlideUp from "../animations/SlideUp";

const ICONS = {
  FaVideo: <FaVideo />,
  FaGlobe: <FaGlobe />,
  FaMobileAlt: <FaMobileAlt />,
  FaCashRegister: <FaCashRegister />,
};

// Original hardcoded plans, used as a fallback until Firestore has data.
const defaultPlans = [
  {
    icon: "FaVideo",
    title: "AI Video",
    subtitle: "Short, professional videos",
    price: "15",
    items: [
      "30 seconds - 1 minute",
      "5 Muuqaal",
      "Professional Voice",
      "Music Included",
      "HD Quality",
    ],
    popular: false,
  },
  {
    icon: "FaGlobe",
    title: "Website",
    subtitle: "Modern & professional website",
    price: "150",
    items: [
      "Professional Website",
      "Mobile & Desktop Friendly",
      "Modern Design",
      "Contact & Information Pages",
      "Easy to Update",
      "Basic Admin Management",
    ],
    popular: true,
  },
  {
    icon: "FaMobileAlt",
    title: "Flutter App",
    subtitle: "Android app with full features",
    price: "700",
    items: [
      "Android",
      "Full backend",
      "Admin Panel",
      "Play Store Ready",
      "Modern UI/UX",
      "Free Support",
    ],
    popular: false,
  },
  {
    icon: "FaCashRegister",
    title: "POS System",
    subtitle: "Complete business solution",
    price: "800",
    items: [
      "Restaurant",
      "Pharmacy",
      "QR Ordering",
      "Dashboard",
      "Inventory Management",
      "Reports & Analytics",
    ],
    popular: false,
  },
];

const trustPoints = [
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "We're always here",
  },
  {
    icon: <FaShieldAlt />,
    title: "High Quality",
    desc: "Professional work",
  },
  {
    icon: <FaBolt />,
    title: "Fast Delivery",
    desc: "On time always",
  },
  {
    icon: <FaUsers />,
    title: "100+ Happy Clients",
    desc: "Trusted worldwide",
  },
];

function PricingSection() {
  const [plans, setPlans] = useState(defaultPlans);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToCollection("pricingPlans", (items) => {
      if (items.length > 0) {
        setPlans(items);
      } else {
        setPlans(defaultPlans);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleOrder = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  return (
    <section className="pricing">

      <div className="pricing-eyebrow">OUR PACKAGES</div>

      <AnimatedHeading
        text="Choose The Right Plan For You"
        highlight={["Right", "Plan"]}
        style={{ fontSize: 48, fontWeight: 800, marginBottom: 14 }}
      />

      <p className="pricing-subhead">
        High quality digital solutions at affordable prices
      </p>

      <div className="pricing-grid">

        {plans.map((plan, index) => (

          <CornerReveal index={index} key={plan.id || index}>
          <div
            className={`price-card ${plan.popular ? "price-card-popular" : ""}`}
          >

            {plan.popular && (
              <div className="popular-badge">
                <FaCrown /> Most Popular
              </div>
            )}

            <div className="price-card-top">
              <span className="price-card-icon">
                {ICONS[plan.icon] || <FaGlobe />}
              </span>
              <span className="price-card-num">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3>{plan.title}</h3>
            {plan.subtitle && (
              <p className="price-card-subtitle">{plan.subtitle}</p>
            )}

            <div className="price-card-amount">
              <span className="price-currency">$</span>
              <span>{plan.price}</span>
            </div>

            <div className="price-card-items">
              {(plan.items || []).map((item, i) => (
                <p key={i}>
                  <FaCheckCircle className="check-icon" />
                  {item}
                </p>
              ))}
            </div>

            <button
              onClick={() => handleOrder(plan.title)}
            >
              Order Now <FaArrowRight />
            </button>

          </div>
          </CornerReveal>

        ))}

      </div>

      <div className="pricing-trust">
        {trustPoints.map((point) => (
          <SlideUp key={point.title}>
            <div className="pricing-trust-item">
              <span className="pricing-trust-icon">{point.icon}</span>
              <div>
                <strong>{point.title}</strong>
                <span>{point.desc}</span>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>

      {/* HAL MODAL OO KELIYA */}
      <OrderModal
        open={open}
        onClose={() => setOpen(false)}
        service={selectedService}
      />

    </section>
  );
}

export default PricingSection;