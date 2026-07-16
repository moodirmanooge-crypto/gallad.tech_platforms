const technologies = [
  "React",
  "Flutter",
  "Firebase",
  "Node.js",
  "Express",
  "Python",
  "Laravel",
  "Next.js",
  "MongoDB",
  "MySQL",
  "AI",
  "Figma",
];

export default function TechStack() {
  return (
    <section
      style={{
        marginTop: 80,
      }}
    >
      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: 38,
          marginBottom: 40,
        }}
      >
        Technologies We Use
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: 20,
        }}
      >
        {technologies.map((tech) => (
          <div
            key={tech}
            style={{
              background: "#16213e",
              padding: "35px",
              borderRadius: 15,
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
              transition: ".3s",
              cursor: "pointer",
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}