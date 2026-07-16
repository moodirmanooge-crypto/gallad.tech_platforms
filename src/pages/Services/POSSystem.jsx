import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

export default function POSSystem() {
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
        <h1 style={{ fontSize: 45 }}>POS System</h1>

        <p style={{ marginTop: 20, fontSize: 20 }}>
          Powerful Point of Sale Systems for restaurants, supermarkets,
          pharmacies and businesses.
        </p>

        <h2 style={{ marginTop: 40 }}>Features</h2>

        <ul style={{ lineHeight: 2 }}>
          <li>Sales</li>
          <li>Inventory</li>
          <li>Invoices</li>
          <li>Customers</li>
          <li>Reports</li>
          <li>Multi Users</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}