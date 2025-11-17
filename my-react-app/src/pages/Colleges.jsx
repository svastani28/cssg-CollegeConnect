import { useState } from 'react';
import './Colleges.css';

function Colleges() {
  const [searchTerm, setSearchTerm] = useState('');

  const colleges = [
    {
      name: "State University",
      location: "California",
      type: "Public",
      size: "Large (30,000+)",
      acceptanceRate: "47%",
      avgFinancialAid: "$15,000"
    },
    {
      name: "Community College",
      location: "California",
      type: "Public",
      size: "Medium (10,000-30,000)",
      acceptanceRate: "100%",
      avgFinancialAid: "$8,000"
    },
    {
      name: "Liberal Arts College",
      location: "Massachusetts",
      type: "Private",
      size: "Small (<5,000)",
      acceptanceRate: "25%",
      avgFinancialAid: "$35,000"
    },
    {
      name: "Tech Institute",
      location: "New York",
      type: "Private",
      size: "Medium (10,000-30,000)",
      acceptanceRate: "33%",
      avgFinancialAid: "$28,000"
    },
    {
      name: "Regional University",
      location: "Texas",
      type: "Public",
      size: "Large (30,000+)",
      acceptanceRate: "65%",
      avgFinancialAid: "$12,000"
    },
    {
      name: "City College",
      location: "Illinois",
      type: "Public",
      size: "Medium (10,000-30,000)",
      acceptanceRate: "72%",
      avgFinancialAid: "$10,000"
    }
  ];

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="colleges">
      <div className="container">
        <div className="colleges-header">
          <h1>College Search</h1>
          <p>
            Discover colleges that match your interests, goals, and financial needs. 
            Our database includes institutions committed to supporting first-generation students.
          </p>
        </div>

        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by college name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
          <div className="filters">
            <button className="filter-btn">Type</button>
            <button className="filter-btn">Location</button>
            <button className="filter-btn">Size</button>
            <button className="filter-btn">Cost</button>
          </div>
        </div>

        <div className="colleges-grid">
          {filteredColleges.map((college, idx) => (
            <div key={idx} className="college-card">
              <div className="college-header">
                <h3>{college.name}</h3>
                <span className="college-type">{college.type}</span>
              </div>
              <div className="college-info">
                <div className="info-row">
                  <span className="info-label">📍 Location:</span>
                  <span className="info-value">{college.location}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">👥 Size:</span>
                  <span className="info-value">{college.size}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📊 Acceptance Rate:</span>
                  <span className="info-value">{college.acceptanceRate}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">💰 Avg Financial Aid:</span>
                  <span className="info-value">{college.avgFinancialAid}</span>
                </div>
              </div>
              <div className="college-actions">
                <button className="btn-learn-more">Learn More</button>
                <button className="btn-save">Save</button>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="no-results">
            <p>No colleges found matching your search. Try different keywords.</p>
          </div>
        )}

        <div className="tips-section">
          <h2>College Selection Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Consider Fit</h3>
              <p>Look beyond rankings - find a college that matches your academic interests and personal values</p>
            </div>
            <div className="tip-card">
              <h3>Affordability Matters</h3>
              <p>Compare financial aid packages and consider the total cost of attendance</p>
            </div>
            <div className="tip-card">
              <h3>Support Services</h3>
              <p>Research programs specifically designed to support first-generation students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colleges;