const timeline = [
  "2019 - Company Started",
  "2020 - First Client",
  "2021 - Website Services",
  "2022 - POS Systems",
  "2023 - ERP Solutions",
  "2024 - AI Platforms",
  "2025 - Global Expansion",
];

export default function Timeline() {
  return (
    <section
      style={{
        background: "#0F172A",
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "40px",
        }}
      >
        Company Timeline
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {timeline.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#16213E",
              marginBottom: "18px",
              padding: "25px",
              borderLeft: "5px solid #3B82F6",
              color: "#fff",
              borderRadius: "10px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}