import { updateClientStatus, deleteClient } from "../../services/clientService";

export default function ClientModal({
  client,
  onClose,
}) {
  if (!client) return null;

  const updateStatus = async (status) => {
    await updateClientStatus(client.id, status);
  };

  const removeClient = async () => {
    if (window.confirm("Delete this client?")) {
      await deleteClient(client.id);
      onClose();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: 600,
          background: "#111827",
          color: "#fff",
          borderRadius: 15,
          padding: 30,
        }}
      >
        <h2>Client Details</h2>

        <hr />

        <p><b>Name:</b> {client.name}</p>

        <p><b>Email:</b> {client.email}</p>

        <p><b>Phone:</b> {client.phone}</p>

        <p><b>Service:</b> {client.service}</p>

        <p><b>Status:</b> {client.status}</p>

        <h3>Message</h3>

        <div
          style={{
            background: "#1e293b",
            padding: 15,
            borderRadius: 8,
          }}
        >
          {client.message}
        </div>

        <br />

        <select
          defaultValue={client.status}
          onChange={(e) => updateStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <br />
        <br />

        <button
          onClick={removeClient}
          style={{
            background: "red",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: 8,
            marginRight: 10,
          }}
        >
          Delete
        </button>

        <button
          onClick={onClose}
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: 8,
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}