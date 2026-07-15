import "./PricingSection.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "AI Video",
    price: "$20",
    items: [
      "30 Seconds",
      "Professional Voice",
      "Music Included",
      "HD Quality",
    ],
  },
  {
    title: "Website",
    price: "$300",
    items: [
      "React",
      "Firebase",
      "Responsive",
      "Admin Dashboard",
    ],
  },
  {
    title: "Flutter App",
    price: "$500",
    items: [
      "Android",
      "Firebase",
      "Admin Panel",
      "Play Store Ready",
    ],
  },
  {
    title: "POS System",
    price: "$800",
    items: [
      "Restaurant",
      "Pharmacy",
      "QR Ordering",
      "Dashboard",
    ],
  },
];

function PricingSection() {
  return (
    <section className="pricing">

      <h2>Our Pricing</h2>

      <div className="pricing-grid">

        {plans.map((plan, index) => (

          <div className="price-card" key={index}>

            <h3>{plan.title}</h3>

            <h1>{plan.price}</h1>

            {plan.items.map((item, i) => (
              <p key={i}>
                <FaCheck />
                {item}
              </p>
            ))}

            <button>Order Now</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PricingSection;