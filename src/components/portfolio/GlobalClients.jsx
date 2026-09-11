import { useEffect, useState } from "react";
import { subscribeToCollection } from "../../firebase/homeContent";
import PortfolioMediaItem from "./PortfolioMediaItem";
import AnimatedHeading from "../animations/AnimatedHeading";

const defaultClients = [
  { image: "/clients/galladpos.png", caption: "GalladTech Platforms" },
  { image: "/clients/futureleader.png", caption: "Future Leaders Academy" },
  { image: "/clients/dreamcrt.png", caption: "Dream CRT Academy" },
];

export default function GlobalClients() {
  const [clients, setClients] = useState(defaultClients);

  useEffect(() => {
    const unsubscribe = subscribeToCollection("portfolioClients", (items) => {
      if (items.length > 0) {
        setClients(items);
      } else {
        setClients(defaultClients);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section style={{ marginTop: 100, marginBottom: 120 }}>
      <AnimatedHeading text="Trusted By Our Clients" />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        {clients.map((item, i) => (
          <PortfolioMediaItem
            key={item.id || `default_${i}`}
            itemKey={`client_${item.id || `default_${i}`}`}
            image={item.image}
            caption={item.caption}
            index={i}
            variant="client"
          />
        ))}
      </div>
    </section>
  );
}