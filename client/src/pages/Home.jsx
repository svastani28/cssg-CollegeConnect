import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to CollegeConnect</h1>
          <p className="hero-subtitle">
            Empowering high-school students through their college application journey
          </p>
          <p className="hero-description">
            CollegeConnect is designed to support first-generation and under-resourced students 
            with guidance, resources, and personalized mentorship throughout the college application process.
          </p>
          <div className="hero-cta">
            <Link to="/dashboard" className="btn btn-primary">Get Started</Link>
            <Link to="/resources" className="btn btn-secondary">Explore Resources</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Resources</h3>
              <p>Access guides, templates, and tools for every step of the college application process.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Mentorship Program</h3>
              <p>Connect with experienced mentors who can guide you through your college journey.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>College Search</h3>
              <p>Discover colleges that match your interests, goals, and financial needs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Financial Aid Support</h3>
              <p>Learn about scholarships, grants, and financial aid opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Inspired by mentorship programs like Apollo Aspire, CollegeConnect is committed to 
            increasing access to guidance and support for students who may not have traditional 
            resources. We believe every student deserves the opportunity to pursue higher education.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
