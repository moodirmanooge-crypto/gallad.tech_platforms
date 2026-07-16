import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

export default function WebDevelopment() {
  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          color: "#fff",
          padding: "120px 60px",
        }}
      >
        <h1 style={{ fontSize: 45 }}>Web Development</h1>

        <p style={{ marginTop: 20, fontSize: 20 }}>
          We build modern websites, dashboards, company systems and business
          platforms using React, Firebase, Node.js and modern technologies.
        </p>

        <h2 style={{ marginTop: 40 }}>Services</h2>

        <ul style={{ lineHeight: 2 }}>
          <li>Business Websites</li>
          <li>Company Portals</li>
          <li>Admin Dashboards</li>
          <li>E-Commerce Websites</li>
          <li>Landing Pages</li>
          <li>CMS Systems</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}