import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

export default function BrandIdentity() {
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
        <h1 style={{ fontSize: 45 }}>Brand Identity</h1>

        <p style={{ marginTop: 20, fontSize: 20 }}>
          Professional branding solutions for businesses.
        </p>

        <h2 style={{ marginTop: 40 }}>Services</h2>

        <ul style={{ lineHeight: 2 }}>
          <li>Logo Design</li>
          <li>Business Cards</li>
          <li>Social Media Kit</li>
          <li>Flyers</li>
          <li>Posters</li>
          <li>Company Branding</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}