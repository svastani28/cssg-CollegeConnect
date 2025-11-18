import './Dashboard.css';
import { useCollegeContext } from '../CollegeContext';
import { Link, useNavigate } from 'react-router-dom';

// Same logic as in Colleges.jsx
function classifyCollegeByScores(college, scores) {
  const userSAT = scores.sat ? Number(scores.sat) : null;
  const userACT = scores.act ? Number(scores.act) : null;
  const collegeSAT = college.satComposite ?? null;
  const collegeACT = college.actComposite ?? null;

  // Prefer SAT if both available
  // Claify as Safety/Target/Reach based on typical score ranges
  if (userSAT && collegeSAT) {
    const diff = userSAT - collegeSAT;
    if (diff >= 100) return 'Safety';
    if (diff <= -100) return 'Reach';
    return 'Target';
  }

  if (userACT && collegeACT) {
    const diff = userACT - collegeACT;
    if (diff >= 2) return 'Safety';
    if (diff <= -2) return 'Reach';
    return 'Target';
  }

  return 'Unclassified';
}

// Main Dashboard component
function Dashboard() {
  const { testScores, updateScores, savedColleges, removeCollege } =
    useCollegeContext();
  const navigate = useNavigate();

  // Handle input changes for test scores
  const handleScoreChange = (e) => {
    const { name, value } = e.target;
    const numeric = value === '' ? '' : value.replace(/\D/g, '');
    updateScores({ ...testScores, [name]: numeric });
  };

  // Classify saved colleges based on current test scores
  const safetyColleges = savedColleges.filter(
    (c) => classifyCollegeByScores(c, testScores) === 'Safety'
  );
  const targetColleges = savedColleges.filter(
    (c) => classifyCollegeByScores(c, testScores) === 'Target'
  );
  const reachColleges = savedColleges.filter(
    (c) => classifyCollegeByScores(c, testScores) === 'Reach'
  );

  return (
    <div className="dashboard">
      <div className="container">
        <h1>Student Dashboard</h1>
        <p className="dashboard-intro">
          Track your college application progress and access personalized recommendations
        </p>

        {/* Top grid cards */}
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

        {/* Test Scores card */}
        <div className="dashboard-card scores-card">
          <h3>Test Scores</h3>
          <p className="scores-subtitle">
            Enter your SAT or ACT scores to see which of your saved colleges are safety, target, or reach schools.
          </p>
          <div className="scores-grid">
            <div className="score-input">
              <label htmlFor="sat">SAT (400–1600)</label>
              <input
                id="sat"
                name="sat"
                type="text"
                value={testScores.sat}
                onChange={handleScoreChange}
                placeholder="e.g. 1420"
              />
            </div>
            <div className="score-input">
              <label htmlFor="act">ACT (1–36)</label>
              <input
                id="act"
                name="act"
                type="text"
                value={testScores.act}
                onChange={handleScoreChange}
                placeholder="e.g. 32"
              />
            </div>
          </div>
        </div>

        {/* Academic Fit overview */}
        <div className="dashboard-card fit-card">
          <h3>Academic Fit Overview</h3>
          <p className="scores-subtitle">
            Based on your scores and the typical scores at your saved colleges.
          </p>

          {savedColleges.length === 0 ? (
            <p className="empty-text">
              You haven't saved any colleges yet. Visit the Colleges page to add schools.
            </p>
          ) : (
            <div className="fit-grid">
              <div className="fit-column">
                <h4>Safety</h4>
                {safetyColleges.length === 0 ? (
                  <p className="empty-text">No safety schools yet.</p>
                ) : (
                  safetyColleges.map((c) => (
                    <p key={c.id || c.name}>{c.name}</p>
                  ))
                )}
              </div>

              <div className="fit-column">
                <h4>Target</h4>
                {targetColleges.length === 0 ? (
                  <p className="empty-text">No target schools yet.</p>
                ) : (
                  targetColleges.map((c) => (
                    <p key={c.id || c.name}>{c.name}</p>
                  ))
                )}
              </div>

              <div className="fit-column">
                <h4>Reach</h4>
                {reachColleges.length === 0 ? (
                  <p className="empty-text">No reach schools yet.</p>
                ) : (
                  reachColleges.map((c) => (
                    <p key={c.id || c.name}>{c.name}</p>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Saved colleges list */}
        {savedColleges.length > 0 && (
          <div className="dashboard-card saved-colleges-card">
            <h3>Saved Colleges</h3>
            <div className="saved-colleges-list">
              {savedColleges.map((c) => (
                <div key={c.id || c.name} className="saved-college-row">
                  <span>{c.name}</span>
                  <button
                    className="btn-remove-college"
                    onClick={() => removeCollege(c.id || c.name)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            {/* Browse Colleges → internal route */}
            <Link to="/colleges" className="action-btn action-btn-link">
              Browse Colleges
            </Link>

            {/* Find Scholarships → external link */}
            <a
              href="https://bigfuture.collegeboard.org/pay-for-college/scholarship-directory"
              className="action-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Scholarships
            </a>

            {/* View Resources → empty button for now */}
            <button className="action-btn">
              View Resources
            </button>

            {/* Connect with Mentor → internal route via button */}
            <button
              className="action-btn"
              onClick={() => navigate('/mentorship')}
            >
              Connect with Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
