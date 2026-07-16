import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

export default function ERPSystem() {
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
        <h1 style={{ fontSize: 45 }}>ERP System</h1>

        <p style={{ marginTop: 20, fontSize: 20 }}>
          Enterprise Resource Planning solutions for companies.
        </p>

        <h2 style={{ marginTop: 40 }}>Modules</h2>

        <ul style={{ lineHeight: 2 }}>
          <li>HR Management</li>
          <li>Finance</li>
          <li>Inventory</li>
          <li>Payroll</li>
          <li>Projects</li>
          <li>Reports</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}