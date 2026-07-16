import { useEffect, useState } from "react";

const stats = [
  { number: 250, label: "Completed Projects", suffix: "+" },
  { number: 100, label: "Happy Clients", suffix: "+" },
  { number: 15, label: "Countries", suffix: "+" },
  { number: 99, label: "Success Rate", suffix: "%" },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2 style={{ color: "#3B82F6", fontSize: "42px", fontWeight: "bold" }}>
      {count}
      {suffix}
    </h2>
  );
}

export default function AnimatedCounter() {
  return (
    <section
      style={{
        padding: "80px 60px",
        background: "#0F172A",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "42px",
          marginBottom: "60px",
        }}
      >
        GalladTech In Numbers
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              background: "#16213E",
              padding: "35px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <Counter end={item.number} suffix={item.suffix} />

            <p
              style={{
                color: "#ddd",
                marginTop: "15px",
                fontSize: "18px",
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}