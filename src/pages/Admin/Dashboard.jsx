import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatsCards from "../../components/admin/StatsCards";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#0f172a",
          color: "#fff",
        }}
      >
        <Topbar />

        <div
          style={{
            padding: 30,
          }}
        >
          <h1
            style={{
              marginBottom: 25,
            }}
          >
            Dashboard
          </h1>

          <StatsCards />
        </div>
      </div>
    </div>
  );
}