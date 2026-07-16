const studies = [
  {
    title: "Gallad POS System",
    problem: "Restaurant sales were slow.",
    solution: "Cloud POS System",
    tech: "React + Firebase",
    result: "300% Faster Sales",
  },
  {
    title: "Future Leader Academy",
    problem: "Manual school management.",
    solution: "School ERP",
    tech: "Flutter + Firebase",
    result: "100% Digital",
  },
];

export default function CaseStudies() {
  return (
    <section
      style={{
        padding: "90px 60px",
        background: "#111827",
      }}
    >
      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "60px",
          fontSize: "40px",
        }}
      >
        Case Studies
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {studies.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#16213E",
              padding: "30px",
              borderRadius: "18px",
            }}
          >
            <h3 style={{ color: "#fff" }}>{item.title}</h3>

            <p style={{ color: "#ddd" }}>
              <b>Problem:</b> {item.problem}
            </p>

            <p style={{ color: "#ddd" }}>
              <b>Solution:</b> {item.solution}
            </p>

            <p style={{ color: "#ddd" }}>
              <b>Technology:</b> {item.tech}
            </p>

            <p style={{ color: "#3B82F6" }}>
              <b>Result:</b> {item.result}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}