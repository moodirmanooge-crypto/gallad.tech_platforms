import { useEffect, useState } from "react";

export default function PremiumAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(60px)",
        transition: "all 1s ease",
      }}
    >
    </div>
  );
}