import { useState } from "react";
import { useAuth } from "../types/useAuth";
import "../styles/Settimgs.css";

export default function Settings() {
  const { user } = useAuth();

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  if (!user) return null;

  return (
    <div className="settings">
      <h1>Settings</h1>

      <p className="settings-subtitle">Admin configuration panel</p>

      <label className="settings-option">
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
        Enable Notifications
      </label>

      <label className="settings-option">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Dark Mode
      </label>
    </div>
  );
}
