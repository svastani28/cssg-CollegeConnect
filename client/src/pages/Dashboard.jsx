import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <h1>Student Dashboard</h1>
        <p className="dashboard-intro">
          Track your college application progress and access personalized recommendations
        </p>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Application Status</h3>
            <div className="status-item">
              <span className="status-label">Applications Started:</span>
              <span className="status-value">3</span>
            </div>
            <div className="status-item">
              <span className="status-label">Applications Submitted:</span>
              <span className="status-value">1</span>
            </div>
            <div className="status-item">
              <span className="status-label">Awaiting Response:</span>
              <span className="status-value">1</span>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Next Steps</h3>
            <ul className="task-list">
              <li>✓ Complete Common App profile</li>
              <li>⏳ Request letters of recommendation</li>
              <li>⏳ Draft personal statement</li>
              <li>☐ Submit financial aid forms</li>
            </ul>
          </div>

          <div className="dashboard-card">
            <h3>Upcoming Deadlines</h3>
            <div className="deadline-item">
              <p className="deadline-date">Dec 15, 2024</p>
              <p className="deadline-desc">Early Action Deadline - University A</p>
            </div>
            <div className="deadline-item">
              <p className="deadline-date">Jan 1, 2025</p>
              <p className="deadline-desc">Regular Decision - University B</p>
            </div>
            <div className="deadline-item">
              <p className="deadline-date">Jan 15, 2025</p>
              <p className="deadline-desc">Financial Aid Documents</p>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Your Mentor</h3>
            <div className="mentor-info">
              <div className="mentor-avatar">👤</div>
              <div>
                <p className="mentor-name">Sarah Johnson</p>
                <p className="mentor-role">College Counselor</p>
                <button className="btn-contact">Schedule Meeting</button>
              </div>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn">Browse Colleges</button>
            <button className="action-btn">Find Scholarships</button>
            <button className="action-btn">View Resources</button>
            <button className="action-btn">Connect with Mentor</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
