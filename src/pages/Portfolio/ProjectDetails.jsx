import { useParams, Link } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";
import projects from "../../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <>
        <Navbar />

        <div
          style={{
            minHeight: "100vh",
            background: "#0f172a",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Project Not Found</h1>

          <Link
            to="/portfolio"
            style={{
              marginTop: 25,
              background: "#2563eb",
              color: "#fff",
              padding: "12px 30px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Back Portfolio
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section
        style={{
          background: "#0f172a",
          minHeight: "100vh",
          padding: "120px 8%",
          color: "#fff",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            maxHeight: 500,
            objectFit: "cover",
            borderRadius: 20,
          }}
        />

        <h1
          style={{
            marginTop: 40,
            fontSize: 45,
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            marginTop: 25,
            lineHeight: 1.9,
            color: "#cbd5e1",
            fontSize: 18,
          }}
        >
          {project.fullDescription}
        </p>

        <h2 style={{ marginTop: 40 }}>
          Technologies
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 15,
            marginTop: 20,
          }}
        >
          {project.technologies.map((tech) => (
            <div
              key={tech}
              style={{
                background: "#2563eb",
                padding: "12px 20px",
                borderRadius: 30,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 50,
            display: "grid",
            gap: 15,
          }}
        >
          <h3>Client : {project.client}</h3>

          <h3>Category : {project.category}</h3>

          <h3>Year : {project.year}</h3>
        </div>

        <div
          style={{
            marginTop: 50,
            display: "flex",
            gap: 20,
          }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "15px 30px",
              textDecoration: "none",
              borderRadius: 10,
            }}
          >
            Live Demo
          </a>

          <Link
            to="/portfolio"
            style={{
              background: "#1e293b",
              color: "#fff",
              padding: "15px 30px",
              textDecoration: "none",
              borderRadius: 10,
            }}
          >
            Back Portfolio
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}