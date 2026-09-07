import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: 260,
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        padding: 25,
      }}
    >
      <h2 style={{ marginBottom: 30 }}>GalladTech</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <Link to="/admin/dashboard">Dashboard</Link>

        <Link to="/admin/clients">Clients</Link>

        <Link to="/admin/statistics">Statistics</Link>

        <Link to="/admin/content">Content Manager</Link>

        <Link to="/admin/settings">Settings</Link>
      </nav>
    </div>
  );
}