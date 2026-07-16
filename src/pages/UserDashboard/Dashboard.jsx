import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>Gallad.Tech</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>👤 My Profile</li>
          <li>📁 My Projects</li>
          <li>📦 My Orders</li>
          <li>💬 Messages</li>
          <li>⚙ Settings</li>
        </ul>
      </aside>

      <main className="main">

        <div className="welcome-card">
          <h1>Welcome Back 👋</h1>
          <p>Manage your Gallad.Tech account.</p>
        </div>

        <div className="stats">

          <div className="card">
            <h2>0</h2>
            <span>Projects</span>
          </div>

          <div className="card">
            <h2>0</h2>
            <span>Orders</span>
          </div>

          <div className="card">
            <h2>0</h2>
            <span>Messages</span>
          </div>

          <div className="card">
            <h2>Active</h2>
            <span>Account</span>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;