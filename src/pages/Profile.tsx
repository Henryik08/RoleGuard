import { Link } from "react-router-dom";
import { useAuth } from "../types/useAuth";
import "../styles/Profile.css";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="profile">
      <h1>Profile</h1>

      <div className="profile-card">
        <p>
          <strong>Username:</strong> {user.username}
        </p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>

      <br />

      <Link className="profile-back-link" to="/dashboard">
        ← Back to Dashboard
      </Link>
    </div>
  );
}
