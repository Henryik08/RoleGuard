import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../types/useAuth";
import "../styles/Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Hamburger (mobile only) */}
      <button
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Collapsible menu */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        {/* Left links */}
        <div className="navbar-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>

          {user.role === "Admin" && <Link to="/settings" onClick={closeMenu}>Settings</Link>}
        </div>

        {/* Right user info */}
        <div className="navbar-user">
          <span>
            {user.username} ({user.role})
          </span>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
