const stats = [
  {
    number: "250+",
    title: "Projects",
  },
  {
    number: "100+",
    title: "Clients",
  },
  {
    number: "15+",
    title: "Countries",
  },
  {
    number: "99%",
    title: "Success",
  },
];

export default function PortfolioStats() {
  return (
    <section
      style={{
        padding: "80px 60px",
        background: "#111827",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#16213E",
              borderRadius: "18px",
              padding: "35px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#3B82F6",
                fontSize: "42px",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#ddd",
                marginTop: "10px",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}