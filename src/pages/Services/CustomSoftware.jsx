import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

export default function CustomSoftware() {
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
        <h1 style={{ fontSize: 45 }}>Custom Software</h1>

        <p style={{ marginTop: 20, fontSize: 20 }}>
          We build custom software tailored to your business needs.
        </p>

        <h2 style={{ marginTop: 40 }}>Solutions</h2>

        <ul style={{ lineHeight: 2 }}>
          <li>CRM Systems</li>
          <li>School Systems</li>
          <li>Hospital Systems</li>
          <li>Company Software</li>
          <li>Booking Systems</li>
          <li>Business Automation</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}