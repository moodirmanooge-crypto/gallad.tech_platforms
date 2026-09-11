import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";
import ServicesSection from "../../components/home/Services";

function Services() {
  return (
    <>
      <Navbar />

      <main style={{ background: "#0f172a", paddingTop: "85px" }}>
        <div style={{ padding: "20px 8% 0" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#93c5fd",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <ServicesSection />
      </main>

      <Footer />
    </>
  );
}

export default Services;