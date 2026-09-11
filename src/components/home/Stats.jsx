import "./Stats.css";
import CornerReveal from "../animations/CornerReveal";

const stats = [
  {
    number: "50+",
    title: "Completed Projects",
  },
  {
    number: "30+",
    title: "Happy Clients",
  },
  {
    number: "5+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
  },
];

function Stats() {
  return (
    <section className="stats">

      <div className="stats-grid">

        {stats.map((item, index) => (

          <CornerReveal index={index} key={index}>
            <div className="stat-card">

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </div>
          </CornerReveal>

        ))}

      </div>

    </section>
  );
}

export default Stats;