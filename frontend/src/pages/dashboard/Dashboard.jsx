import React from "react";
import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>

      <section className="dashboard-summary">
        <div className="summary-item">
          <h2>Total Printers</h2>
          <p>5 Printers</p>{" "}
          {/* Example static value, can be fetched dynamically */}
        </div>
        <div className="summary-item">
          <h2>Total Pages Printed</h2>
          <p>1,200 Pages</p>{" "}
          {/* Example static value, can be fetched dynamically */}
        </div>
        <div className="summary-item">
          <h2>Total Students</h2>
          <p>300 Students</p>{" "}
          {/* Example static value, can be fetched dynamically */}
        </div>
      </section>

      <section className="dashboard-actions">
        <h2>Quick Actions</h2>
        <div className="actions-container">
          <button onClick={() => navigate("/printing-logs")}>
            View Printing Logs
          </button>
          <button onClick={() => navigate("/printer-management")}>
            Manage Printers
          </button>
          <button onClick={() => navigate("/configuration")}>
            Students Configuration
          </button>
          <button onClick={() => navigate("/reports")}>View Reports</button>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>Powered by SPSO Printing System</p>
      </footer>
    </div>
  );
};

export default Dashboard;
