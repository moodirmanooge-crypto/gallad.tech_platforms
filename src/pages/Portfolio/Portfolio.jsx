import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";

import PortfolioSearch from "../../components/portfolio/PortfolioSearch";
import PortfolioFilter from "../../components/portfolio/PortfolioFilter";
import PortfolioGrid from "../../components/portfolio/PortfolioGrid";
import ProjectModal from "../../components/portfolio/ProjectModal";
import FeaturedProject from "../../components/portfolio/FeaturedProject";
import TechStack from "../../components/portfolio/TechStack";
import PortfolioStats from "../../components/portfolio/PortfolioStats";
import PortfolioReviews from "../../components/portfolio/PortfolioReviews";
import VideoShowcase from "../../components/portfolio/VideoShowcase";
import GallerySlider from "../../components/portfolio/GallerySlider";
import Awards from "../../components/portfolio/Awards";
import GlobalClients from "../../components/portfolio/GlobalClients";
import AnimatedCounter from "../../components/portfolio/AnimatedCounter";
import CaseStudies from "../../components/portfolio/CaseStudies";
import Timeline from "../../components/portfolio/Timeline";
import FAQ from "../../components/portfolio/FAQ";
import CallToAction from "../../components/portfolio/CallToAction";
import PremiumAnimation from "../../components/portfolio/PremiumAnimation";

import projects from "../../data/projects";

export default function Portfolio() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      category === "All" ||
      project.category === category;

    const matchesSearch =
      project.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          padding: "120px 8% 0",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "#93c5fd",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          <FaArrowLeft /> Back to Home
        </Link>

        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 45,
          }}
        >
          Our Portfolio
        </h1>

        {/* ===== Firestore-managed, animated sections — shown first ===== */}
        <GallerySlider />

        <Awards />

        <GlobalClients />

        <VideoShowcase />

        {/* ===== Everything else follows below ===== */}
        <PortfolioStats />

        <PortfolioReviews />

        <FeaturedProject />

        <AnimatedCounter />

        <CaseStudies />

        <Timeline />

        <FAQ />

        <CallToAction />

        <PremiumAnimation />

        <TechStack />

        <PortfolioSearch
          search={search}
          setSearch={setSearch}
        />

        <PortfolioFilter
          selected={category}
          setSelected={setCategory}
        />

        <PortfolioGrid
          projects={filteredProjects}
          onOpen={setSelectedProject}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </section>

      <Footer />
    </>
  );
}