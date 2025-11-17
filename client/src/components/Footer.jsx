import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CollegeConnect</h3>
            <p>Supporting high-school students through the college application process.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/mentorship">Mentorship</a></li>
              <li><a href="/colleges">College Search</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@collegeconnect.org</p>
            <p>Empowering first-generation and under-resourced students</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CollegeConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
