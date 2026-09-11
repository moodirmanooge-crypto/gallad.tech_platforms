import { useEffect, useState } from "react";
import { subscribeToCollection } from "../../firebase/homeContent";
import PortfolioMediaItem from "./PortfolioMediaItem";
import AnimatedHeading from "../animations/AnimatedHeading";

const defaultImages = [
  {
    image: "/clients/galladpos.png",
    caption: "GalladTech Platforms — Brand Identity",
  },
  {
    image: "/clients/futureleader.png",
    caption: "Future Leaders Academy — School Branding",
  },
  {
    image: "/clients/dreamcrt.png",
    caption: "Dream CRT — Trading Academy",
  },
];

export default function GallerySlider() {
  const [images, setImages] = useState(defaultImages);

  useEffect(() => {
    const unsubscribe = subscribeToCollection("portfolioGallery", (items) => {
      if (items.length > 0) {
        setImages(items);
      } else {
        setImages(defaultImages);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section style={{ marginTop: 100 }}>
      <AnimatedHeading text="Project Gallery" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 25,
        }}
      >
        {images.map((item, i) => (
          <PortfolioMediaItem
            key={item.id || `default_${i}`}
            itemKey={`gallery_${item.id || `default_${i}`}`}
            image={item.image}
            caption={item.caption}
            index={i}
            variant="gallery"
          />
        ))}
      </div>
    </section>
  );
}