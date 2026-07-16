const images = [
  "/clients/galladpos.png",
  "/clients/futureleader.png",
  "/clients/dreamcrt.png",
];

export default function GallerySlider() {
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
        Project Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: 25,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            style={{
              width: "100%",
              borderRadius: 20,
              height: 240,
              objectFit: "cover",
              transition: ".3s",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}