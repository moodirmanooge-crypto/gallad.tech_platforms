const awards = [
  "/certificates/award1.png.jpeg",
  "/certificates/award2.png.jpeg",
];

export default function Awards() {
  return (
    <section
      style={{
        marginTop: 100,
      }}
    >
      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: 40,
          fontSize: 40,
        }}
      >
        Awards & Certificates
      </h2>

      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {awards.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            style={{
              width: 300,
              borderRadius: 15,
              boxShadow: "0 10px 30px rgba(0,0,0,.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
}