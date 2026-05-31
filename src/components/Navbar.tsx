import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../types/useAuth";
import "../styles/Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Left links */}
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>

        {user.role === "Admin" && <Link to="/settings">Settings</Link>}
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
    </nav>
  );
}
