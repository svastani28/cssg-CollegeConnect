import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>CollegeConnect</h1>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/mentorship" className="nav-link">Mentorship</Link>
            <Link to="/colleges" className="nav-link">Colleges</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;