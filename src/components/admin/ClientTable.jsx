import { useEffect, useState } from "react";
import {
  subscribeClients,
  updateClientStatus,
  deleteClient,
} from "../../services/clientService";

import StatusBadge from "./StatusBadge";
import ClientModal from "./ClientModal";

export default function ClientTable({ search = "" }) {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeClients(setClients);
    return () => unsubscribe();
  }, []);

  const changeStatus = async (client) => {
    let nextStatus = "Pending";

    if (client.status === "Pending") {
      nextStatus = "In Progress";
    } else if (client.status === "In Progress") {
      nextStatus = "Completed";
    }

    await updateClientStatus(client.id, nextStatus);
  };

  const filteredClients = clients.filter((client) => {
    const text = (search || "").toLowerCase();

    return (
      client.name?.toLowerCase().includes(text) ||
      client.email?.toLowerCase().includes(text) ||
      client.phone?.toLowerCase().includes(text) ||
      client.service?.toLowerCase().includes(text)
    );
  });

  return (
    <>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          color: "#fff",
          marginTop: 20,
        }}
      >
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Email</th>
            <th align="left">Phone</th>
            <th align="left">Service</th>
            <th align="left">Status</th>
            <th align="left">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredClients.map((client) => (
            <tr
              key={client.id}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedClient(client)}
            >
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.service}</td>

              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    changeStatus(client);
                  }}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <StatusBadge status={client.status} />
                </button>
              </td>

              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteClient(client.id);
                  }}
                  style={{
                    background: "red",
                    color: "#fff",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: 6,
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ClientModal
        client={selectedClient}
        onClose={() => setSelectedClient(null)}
      />
    </>
  );
}