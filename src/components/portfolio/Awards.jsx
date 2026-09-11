import { useEffect, useState } from "react";
import { subscribeToCollection } from "../../firebase/homeContent";
import PortfolioMediaItem from "./PortfolioMediaItem";
import AnimatedHeading from "../animations/AnimatedHeading";

const defaultAwards = [
  {
    image: "/certificates/award1.png.jpeg",
    caption: "GalladTech Platforms — Certificate of Excellence",
  },
  {
    image: "/certificates/award2.png.jpeg",
    caption: "Gulled Ibrahim Dahir — Certificate of Excellence",
  },
];

export default function Awards() {
  const [awards, setAwards] = useState(defaultAwards);

  useEffect(() => {
    const unsubscribe = subscribeToCollection("portfolioAwards", (items) => {
      if (items.length > 0) {
        setAwards(items);
      } else {
        setAwards(defaultAwards);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section style={{ marginTop: 100 }}>
      <AnimatedHeading text="Awards & Certificates" />

      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {awards.map((item, i) => (
          <PortfolioMediaItem
            key={item.id || `default_${i}`}
            itemKey={`award_${item.id || `default_${i}`}`}
            image={item.image}
            caption={item.caption}
            index={i}
            variant="award"
          />
        ))}
      </div>
    </section>
  );
}