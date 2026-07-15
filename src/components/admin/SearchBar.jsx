export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search name, email, phone or service..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: 15,
        marginBottom: 25,
        borderRadius: 8,
        border: "1px solid #ddd",
        outline: "none",
        fontSize: 16,
      }}
    />
  );
}