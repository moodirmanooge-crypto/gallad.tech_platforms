import { useEffect, useState } from "react";
import { subscribeClients } from "../../services/clientService";

export default function StatsCards() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeClients(setClients);

    return () => unsubscribe();
  }, []);

  const total = clients.length;

  const pending = clients.filter(
    (c) => c.status === "Pending"
  ).length;

  const progress = clients.filter(
    (c) => c.status === "In Progress"
  ).length;

  const completed = clients.filter(
    (c) => c.status === "Completed"
  ).length;

  const cards = [
    {
      title: "Total Clients",
      value: total,
      color: "#2563eb",
    },
    {
      title: "Pending",
      value: pending,
      color: "#f59e0b",
    },
    {
      title: "In Progress",
      value: progress,
      color: "#3b82f6",
    },
    {
      title: "Completed",
      value: completed,
      color: "#22c55e",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: 20,
        marginTop: 30,
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: card.color,
            color: "#fff",
            padding: 30,
            borderRadius: 14,
            boxShadow: "0 10px 25px rgba(0,0,0,.2)",
          }}
        >
          <h3>{card.title}</h3>

          <h1
            style={{
              fontSize: 45,
              marginTop: 10,
            }}
          >
            {card.value}
          </h1>
        </div>
      ))}
    </div>
  );
}