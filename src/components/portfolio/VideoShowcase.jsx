export default function VideoShowcase() {
  return (
    <section
      style={{
        marginTop: 100,
        marginBottom: 100,
      }}
    >
      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: 40,
          marginBottom: 40,
        }}
      >
        Watch Our Demo
      </h2>

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,.4)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          controls
          width="100%"
          poster="/clients/galladpos.png"
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}