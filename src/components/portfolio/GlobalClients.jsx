const clients = [
  "/clients/galladpos.png",
  "/clients/futureleader.png",
  "/clients/dreamcrt.png",
];

export default function GlobalClients() {
  return (
    <section
      style={{
        marginTop: 100,
        marginBottom: 120,
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
        Trusted By Our Clients
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {clients.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            style={{
              width: 170,
              filter: "brightness(1.1)",
              transition: ".3s",
            }}
          />
        ))}
      </div>
    </section>
  );
}