import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import SearchBar from "../../components/admin/SearchBar";
import ClientTable from "../../components/admin/ClientTable";

export default function Clients() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#0f172a",
          color: "#fff",
        }}
      >
        <Topbar />

        <div style={{ padding: 30 }}>
          <h1>Clients</h1>

          <SearchBar />

          <ClientTable />
        </div>
      </div>
    </div>
  );
}