import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/auth";
import { useNavigate, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

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
        {user ? (
          <div className="user-menu">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                user.displayName || user.email
              )}&background=2563eb&color=fff`}
              alt="Profile"
              className="profile-img"
            />
            <span className="user-name">
              {user.displayName || user.email}
            </span>
            <button className="logout-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <Link className="login-btn" to="/login">
              Login
            </Link>
            <Link className="start-btn" to="/register">
              Get Started
            </Link>
          </>
        )}
      </div>
    </header>
  );
}