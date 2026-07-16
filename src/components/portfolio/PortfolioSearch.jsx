export default function PortfolioSearch({
  search,
  setSearch,
}) {
  return (
    <div
      style={{
        marginTop: 40,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search Project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: 600,
          padding: "15px",
          borderRadius: 10,
          border: "none",
          outline: "none",
          background: "#16213e",
          color: "#fff",
          fontSize: 16,
        }}
      />
    </div>
  );
}