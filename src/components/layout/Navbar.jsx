import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        Gallad<span>Tech</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="actions">
        <Link className="login" to="/login">
          Login
        </Link>

        <Link className="btn" to="/register">
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default Navbar;