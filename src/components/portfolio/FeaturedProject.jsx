import { Link } from "react-router-dom";
import projects from "../../data/projects";

export default function FeaturedProject() {
  const project = projects[0];

  return (
    <section
      style={{
        marginBottom: 80,
        background: "#16213e",
        borderRadius: 25,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: 500,
          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: 50,
          color: "#fff",
        }}
      >
        <span
          style={{
            background: "#2563eb",
            padding: "8px 18px",
            borderRadius: 30,
          }}
        >
          ⭐ Featured Project
        </span>

        <h1
          style={{
            marginTop: 25,
            fontSize: 45,
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            marginTop: 25,
            lineHeight: 1.8,
            color: "#cbd5e1",
          }}
        >
          {project.fullDescription}
        </p>

        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 35,
          }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 30px",
              borderRadius: 10,
            }}
          >
            Live Demo
          </a>

          <Link
            to={`/portfolio/${project.id}`}
            style={{
              background: "#1e293b",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 30px",
              borderRadius: 10,
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}