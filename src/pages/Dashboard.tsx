import { useAuth } from "../types/useAuth";
import '../styles/Dashboard.css'

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* ADMIN VIEW */}
      {user.role === "Admin" && (
        <div className="admin-section">
          <h2>Admin Controls</h2>

          <div className="admin-actions">
            <button>Create User</button>
            <button>Delete User</button>
            <button>View System Logs</button>
          </div>

          <table className="dashboard-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>john</td>
                <td>Editor</td>
              </tr>
              <tr>
                <td>sarah</td>
                <td>Viewer</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* EDITOR VIEW */}
      {user.role === "Editor" && (
        <div className="editor-section">
          <h2>Content Editor</h2>

          <textarea rows={6} cols={50} placeholder="Write content here..." />

          <br />

          <button className="publish-btn">Publish</button>
        </div>
      )}

      {/* VIEWER VIEW */}
      {user.role === "Viewer" && (
        <div className="viewer-section">
          <h2>Reports</h2>

          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Report</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Traffic Report</td>
                <td>Read Only</td>
              </tr>
              <tr>
                <td>Usage Stats</td>
                <td>Read Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
