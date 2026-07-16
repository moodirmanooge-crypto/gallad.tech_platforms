import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section
      style={{
        padding: "100px 40px",
        background:
          "linear-gradient(135deg,#2563EB,#1D4ED8,#0F172A)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Ready To Build Your Next Project?
      </h2>

      <p
        style={{
          color: "#ddd",
          maxWidth: "700px",
          margin: "auto",
          lineHeight: 1.8,
          marginBottom: "40px",
        }}
      >
        GalladTech Platforms builds modern websites, mobile apps,
        POS systems, ERP software and AI solutions for businesses
        around the world.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/contact"
          style={{
            padding: "18px 40px",
            background: "#fff",
            color: "#1D4ED8",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Link>

        <Link
          to="/pricing"
          style={{
            padding: "18px 40px",
            border: "2px solid white",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          View Pricing
        </Link>
      </div>
    </section>
  );
}