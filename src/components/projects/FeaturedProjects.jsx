import "./FeaturedProjects.css";
import { useEffect, useState } from "react";
import { subscribeToCollection } from "../../firebase/homeContent";
import AnimatedHeading from "../animations/AnimatedHeading";
import CornerReveal from "../animations/CornerReveal";

// Original hardcoded projects, used as a fallback until Firestore has data.
const defaultProjects = [
  {
    title: "Dream CRT Academy",
    type: "Trading Education Platform",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900",
    link: "http://dreamcrtacademy.com",
  },

  {
    title: "Sahal Server POS",
    type: "Restaurant POS System",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900",
    link: "http://sahalserver.com",
  },

  {
    title: "Dhibic Dahab App",
    type: "Android Marketplace",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900",
    link: "https://play.google.com/store/apps/details?id=com.gallad.dhibicdahabshop",
  },
];

export default function FeaturedProjects() {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    const unsubscribe = subscribeToCollection("featuredProjects", (items) => {
      if (items.length > 0) {
        setProjects(items);
      } else {
        setProjects(defaultProjects);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="featured-projects">

      <AnimatedHeading text="Featured Projects" />

      <p>
        Some of our latest software and mobile solutions.
      </p>

      <div className="project-grid">

        {projects.map((project, index) => (

          <CornerReveal index={index} key={project.id || index}>
            <div className="project-card">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <span>{project.type}</span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>

              </div>

            </div>
          </CornerReveal>

        ))}

      </div>

    </section>
  );
}