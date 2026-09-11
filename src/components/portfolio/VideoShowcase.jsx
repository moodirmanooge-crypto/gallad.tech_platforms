import { useEffect, useState } from "react";
import { subscribeToDoc } from "../../firebase/homeContent";
import AnimatedHeading from "../animations/AnimatedHeading";

const defaultDemo = {
  videoUrl: "/videos/demo.mp4",
  posterUrl: "/clients/galladpos.png",
};

export default function VideoShowcase() {
  const [demo, setDemo] = useState(defaultDemo);

  useEffect(() => {
    const unsubscribe = subscribeToDoc("portfolioDemo", "main", (data) => {
      if (data && data.videoUrl) {
        setDemo(data);
      } else {
        setDemo(defaultDemo);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section
      style={{
        marginTop: 100,
        marginBottom: 100,
      }}
    >
      <AnimatedHeading text="Watch Our Demo" style={{ marginBottom: 40 }} />

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,.4)",
        }}
      >
        <video
          key={demo.videoUrl}
          autoPlay
          muted
          loop
          controls
          width="100%"
          poster={demo.posterUrl}
        >
          <source src={demo.videoUrl} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}