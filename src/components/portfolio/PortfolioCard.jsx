import { Link } from "react-router-dom";

export default function PortfolioCard({ project, onOpen }) {
  return (
    <div
      style={{
        background: "#16213e",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,.3)",
        transition: ".3s",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: 20 }}>
        <h3
          style={{
            color: "#fff",
            marginBottom: 10,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "#bfc8e2",
            lineHeight: 1.6,
            minHeight: 70,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 20,
          }}
        >
          <button
            onClick={() => onOpen(project)}
            style={{
              flex: 1,
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Preview
          </button>

          <Link
            to={`/portfolio/${project.id}`}
            style={{
              flex: 1,
              background: "#0f172a",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
              padding: "12px",
              borderRadius: 8,
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}