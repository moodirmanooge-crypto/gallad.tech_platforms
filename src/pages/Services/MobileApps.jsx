import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

export default function MobileApps() {
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
        <h1 style={{ fontSize: 45 }}>Mobile Applications</h1>

        <p style={{ marginTop: 20, fontSize: 20 }}>
          Android & iOS mobile application development using Flutter.
        </p>

        <h2 style={{ marginTop: 40 }}>We Build</h2>

        <ul style={{ lineHeight: 2 }}>
          <li>E-Commerce Apps</li>
          <li>School Apps</li>
          <li>POS Apps</li>
          <li>Delivery Apps</li>
          <li>Business Apps</li>
          <li>Marketplace Apps</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}