import "./PricingSection.css";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import OrderModal from "../orders/OrderModal";

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
      "Full backend",
      "Responsive",
      "Admin Dashboard",
    ],
  },
  {
    title: "Flutter App",
    price: "$700",
    items: [
      "Android",
      "Full backend",
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
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOrder = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

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

            <button
              onClick={() => handleOrder(plan.title)}
            >
              Order Now
            </button>

          </div>

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