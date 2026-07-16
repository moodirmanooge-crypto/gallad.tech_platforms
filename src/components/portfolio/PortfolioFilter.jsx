const categories = [
  "All",
  "Website",
  "Mobile App",
  "POS",
  "ERP",
  "AI",
];

export default function PortfolioFilter({
  selected,
  setSelected,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 15,
        marginTop: 40,
      }}
    >
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setSelected(item)}
          style={{
            padding: "12px 22px",
            border: "none",
            borderRadius: 30,
            cursor: "pointer",
            fontWeight: "bold",
            transition: ".3s",
            background:
              selected === item
                ? "#2563eb"
                : "#16213e",
            color: "#fff",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}