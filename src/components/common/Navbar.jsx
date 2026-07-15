import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <img src={logo} alt="GalladTech" />

      </div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/services">Services</Link>

        <Link to="/portfolio">Portfolio</Link>

        <Link to="/pricing">Pricing</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </nav>

      <div className="nav-buttons">

        <Link className="login-btn" to="/login">
          Login
        </Link>

        <Link className="start-btn" to="/register">
          Get Started
        </Link>

      </div>

    </header>
  );
}