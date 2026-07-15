import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import StatsCards from "../../components/admin/StatsCards";

export default function Statistics() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div style={{ padding: 30 }}>
          <h1>Statistics</h1>

          <StatsCards />
        </div>
      </div>
    </div>
  );
}