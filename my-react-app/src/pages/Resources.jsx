import './Resources.css';

function Resources() {
  // Sample resource data
  const resources = [
    {
      category: "Application Process",
      items: [
        { title: "Common Application Guide", description: "Step-by-step guide to completing the Common App" },
        { title: "Essay Writing Tips", description: "Expert advice for writing compelling college essays" },
        { title: "Application Timeline", description: "Key dates and deadlines for college applications" }
      ]
    },
    {
      category: "Financial Aid",
      items: [
        { title: "FAFSA Guide", description: "Complete your Free Application for Federal Student Aid" },
        { title: "Scholarship Search", description: "Find scholarships that match your profile" },
        { title: "Financial Aid Calculator", description: "Estimate your financial aid eligibility" }
      ]
    },
    {
      category: "Test Preparation",
      items: [
        { title: "SAT/ACT Prep", description: "Free test prep resources and practice tests" },
        { title: "Test-Optional Policies", description: "Learn about test-optional admissions" },
        { title: "Study Schedules", description: "Effective study plans for standardized tests" }
      ]
    },
    {
      category: "College Life",
      items: [
        { title: "Campus Visit Guide", description: "Make the most of your college visits" },
        { title: "Student Life Resources", description: "Learn about campus culture and activities" },
        { title: "Housing Information", description: "Understanding on-campus and off-campus living" }
      ]
    }
  ];

  return (
    <div className="resources">
      <div className="container">
        <div className="resources-header">
          <h1>Resources</h1>
          <p>
            Access comprehensive guides, tools, and information to support your college application journey.
            All resources are free and designed specifically for first-generation and under-resourced students.
          </p>
        </div>

        <div className="resources-content">
          {resources.map((section, idx) => (
            <div key={idx} className="resource-section">
              <h2>{section.category}</h2>
              <div className="resource-grid">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="resource-card">
                    <div className="resource-icon">📄</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="resource-btn">Access Resource</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-resources">
          <h2>Additional Support</h2>
          <div className="support-grid">
            <div className="support-card">
              <h3>📞 Helpline</h3>
              <p>Get immediate help with your questions</p>
              <p className="support-info">1-800-COLLEGE</p>
            </div>
            <div className="support-card">
              <h3>💬 Live Chat</h3>
              <p>Chat with a counselor in real-time</p>
              <button className="support-btn">Start Chat</button>
            </div>
            <div className="support-card">
              <h3>📧 Email Support</h3>
              <p>Send us your questions anytime</p>
              <p className="support-info">support@collegeconnect.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;