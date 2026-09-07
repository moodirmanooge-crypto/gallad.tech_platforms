import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      setMenuOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="navbar">
      {/* ================= LOGO ================= */}
      <div className="logo">
        <Link to="/" aria-label="GalladTech Platforms Home">
          <img
            src="/logo.png"
            alt="GalladTech Platforms"
          />
        </Link>
      </div>

      {/* ================= MOBILE TOGGLE ================= */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* ================= NAVIGATION ================= */}
      <nav className={menuOpen ? "open" : ""}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        {/* ================= BUTTONS (mobile: inside nav) ================= */}
        <div className="nav-buttons mobile-only">
          {user ? (
            <div className="user-menu">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.displayName || user.email || "User"
                )}&background=2563eb&color=fff`}
                alt="Profile"
                className="profile-img"
              />

              <span className="user-name">
                {user.displayName || user.email}
              </span>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link className="login-btn" to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>

              <Link className="start-btn" to="/register" onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* ================= BUTTONS (desktop) ================= */}
      <div className="nav-buttons desktop-only">
        {user ? (
          <div className="user-menu">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                user.displayName || user.email || "User"
              )}&background=2563eb&color=fff`}
              alt="Profile"
              className="profile-img"
            />

            <span className="user-name">
              {user.displayName || user.email}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
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