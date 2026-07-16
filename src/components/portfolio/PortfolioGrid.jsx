import PortfolioCard from "./PortfolioCard";
import ScrollReveal from "../animations/ScrollReveal";

export default function PortfolioGrid({ projects, onOpen }) {
  if (projects.length === 0) {
    return (
      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        No Projects Found
      </h2>
    );
  }

  return (
    <ScrollReveal>
      <div
        className="portfolio-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
          gap: 30,
          marginTop: 40,
        }}
      >
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>
    </ScrollReveal>
  );
}