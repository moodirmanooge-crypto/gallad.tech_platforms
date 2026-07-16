export default function ProjectModal({
  project,
  onClose,
}) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "90%",
          maxWidth: 900,
          background: "#16213e",
          borderRadius: 20,
          overflow: "hidden",
          color: "#fff",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: 350,
            objectFit: "cover",
          }}
        />

        <div style={{ padding: 30 }}>
          <h2>{project.title}</h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: 1.8,
              marginTop: 15,
            }}
          >
            {project.fullDescription}
          </p>

          <div
            style={{
              marginTop: 25,
            }}
          >
            <h3>Technologies</h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 15,
              }}
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: "#2563eb",
                    padding: "10px 15px",
                    borderRadius: 30,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 30,
              display: "grid",
              gap: 12,
            }}
          >
            <div>
              <b>Category:</b> {project.category}
            </div>

            <div>
              <b>Client:</b> {project.client}
            </div>

            <div>
              <b>Year:</b> {project.year}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
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
                padding: "12px 30px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Live Demo
            </a>

            <button
              onClick={onClose}
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                padding: "12px 30px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}