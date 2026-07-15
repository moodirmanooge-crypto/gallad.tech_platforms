export default function StatusBadge({ status }) {
  let color = "#2563eb";

  if (status === "Pending") color = "#f59e0b";

  if (status === "In Progress") color = "#3b82f6";

  if (status === "Completed") color = "#22c55e";

  return (
    <span
      style={{
        background: color,
        color: "#fff",
        padding: "6px 14px",
        borderRadius: 30,
      }}
    >
      {status}
    </span>
  );
}