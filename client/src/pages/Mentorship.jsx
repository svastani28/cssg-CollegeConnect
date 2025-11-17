import './Mentorship.css';

function Mentorship() {
  const mentors = [
    {
      name: "Sarah Johnson",
      role: "College Counselor",
      expertise: "Application Strategy",
      bio: "10+ years helping first-gen students navigate college admissions"
    },
    {
      name: "Michael Chen",
      role: "Financial Aid Expert",
      expertise: "Scholarships & Aid",
      bio: "Specialized in finding financial resources for under-resourced students"
    },
    {
      name: "Emily Rodriguez",
      role: "Essay Coach",
      expertise: "Personal Statements",
      bio: "Former admissions officer with passion for storytelling"
    },
    {
      name: "David Thompson",
      role: "College Student",
      expertise: "Peer Mentoring",
      bio: "Current freshman sharing recent application experience"
    }
  ];

  return (
    <div className="mentorship">
      <div className="container">
        <div className="mentorship-header">
          <h1>Mentorship Program</h1>
          <p>
            Connect with experienced mentors who understand your journey. Our mentors are dedicated 
            to supporting first-generation and under-resourced students through personalized guidance.
          </p>
        </div>

        <section className="mentorship-info">
          <h2>Why Mentorship Matters</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>Personalized Guidance</h3>
              <p>Get one-on-one support tailored to your unique goals and circumstances</p>
            </div>
            <div className="info-card">
              <div className="info-icon">💡</div>
              <h3>Insider Knowledge</h3>
              <p>Learn from those who have successfully navigated the college process</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🤝</div>
              <h3>Ongoing Support</h3>
              <p>Build lasting relationships that extend beyond the application process</p>
            </div>
          </div>
        </section>

        <section className="mentor-section">
          <h2>Meet Our Mentors</h2>
          <div className="mentor-grid">
            {mentors.map((mentor, idx) => (
              <div key={idx} className="mentor-card">
                <div className="mentor-avatar-large">👤</div>
                <h3>{mentor.name}</h3>
                <p className="mentor-role-text">{mentor.role}</p>
                <p className="mentor-expertise">Expertise: {mentor.expertise}</p>
                <p className="mentor-bio">{mentor.bio}</p>
                <button className="connect-btn">Request Mentorship</button>
              </div>
            ))}
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Browse Mentors</h3>
              <p>Review mentor profiles and find someone who matches your needs</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Request Connection</h3>
              <p>Send a mentorship request with information about your goals</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Schedule Meeting</h3>
              <p>Set up regular meetings to discuss your college journey</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Get Support</h3>
              <p>Receive ongoing guidance, feedback, and encouragement</p>
            </div>
          </div>
        </section>

        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join our mentorship program today and get the support you deserve</p>
          <button className="cta-btn">Apply for Mentorship</button>
        </div>
      </div>
    </div>
  );
}

export default Mentorship;
