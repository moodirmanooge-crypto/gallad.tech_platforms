import "./Portfolio.css";

const projects = [
  {
    title: "Restaurant POS",
    category: "POS System",
    image: "https://picsum.photos/600/400?1",
  },
  {
    title: "School Management",
    category: "ERP System",
    image: "https://picsum.photos/600/400?2",
  },
  {
    title: "AI Video Studio",
    category: "AI",
    image: "https://picsum.photos/600/400?3",
  },
  {
    title: "E-Commerce",
    category: "React + Firebase",
    image: "https://picsum.photos/600/400?4",
  },
  {
    title: "Business Website",
    category: "Website",
    image: "https://picsum.photos/600/400?5",
  },
  {
    title: "Mobile App",
    category: "Flutter",
    image: "https://picsum.photos/600/400?6",
  },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Featured Projects</h2>

      <div className="portfolio-grid">
        {projects.map((item, index) => (
          <div key={index} className="portfolio-card">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;