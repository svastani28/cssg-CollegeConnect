import { useState, useEffect } from 'react';
import './Colleges.css';

const API_KEY = import.meta.env.VITE_COLLEGE_SCORECARD_KEY;
const BASE_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools';

// Exact school names used by the College Scorecard API
const TARGET_SCHOOLS = [
  {
    displayName: 'UNC Chapel Hill',
    apiName: 'University of North Carolina at Chapel Hill',
  },
  {
    displayName: 'NC State',
    apiName: 'North Carolina State University at Raleigh',
  },
  {
    displayName: 'Duke University',
    apiName: 'Duke University',
  },
  {
    displayName: 'UGA',
    apiName: 'University of Georgia',
  },
  {
    displayName: 'Georgia Tech',
    apiName: 'Georgia Institute of Technology-Main Campus',
  },
  {
    displayName: 'East Carolina University',
    apiName: 'East Carolina University',
  },
];

function Colleges() {
  const [searchTerm, setSearchTerm] = useState('');
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const ownershipLabel = (ownership) => {
    if (ownership === 1) return 'Public';
    if (ownership === 2) return 'Private (Non-profit)';
    if (ownership === 3) return 'Private (For-profit)';
    return 'Unknown';
  };

  const formatSize = (size) => {
    if (!size) return 'N/A';
    if (size >= 30000) return 'Large (30,000+)';
    if (size >= 10000) return 'Medium (10,000–30,000)';
    if (size >= 5000) return 'Small (5,000–10,000)';
    return 'Very Small (<5,000)';
  };

  const formatPercent = (value) => {
    if (value == null) return 'N/A';
    return `${Math.round(value * 100)}%`;
  };

  const formatMoney = (value) => {
    if (value == null) return 'N/A';
    return `$${value.toLocaleString()}`;
  };

  useEffect(() => {
    const fetchSelectedColleges = async () => {
      try {
        setLoading(true);
        setError('');

        const results = await Promise.all(
          TARGET_SCHOOLS.map(async (school) => {
            const params = new URLSearchParams({
              api_key: API_KEY,
              'school.name': school.apiName,
              per_page: '1',
              fields: [
                'id',
                'school.name',
                'school.city',
                'school.state',
                'school.ownership',
                'latest.student.size',
                'latest.admissions.admission_rate.overall',
                'latest.aid.average_grant',
              ].join(','),
            });

            const res = await fetch(`${BASE_URL}?${params.toString()}`);

            if (!res.ok) {
              console.error('Error fetching', school.apiName);
              return null;
            }

            const data = await res.json();
            if (!data.results || data.results.length === 0) {
              console.warn('No results for', school.apiName);
              return null;
            }

            const c = data.results[0];

            return {
              id: c.id,
              // keep the official name the API returns
              name: c['school.name'],
              location: `${c['school.city']}, ${c['school.state']}`,
              type: ownershipLabel(c['school.ownership']),
              size: formatSize(c['latest.student.size']),
              acceptanceRate: formatPercent(
                c['latest.admissions.admission_rate.overall']
              ),
              avgFinancialAid: formatMoney(c['latest.aid.average_grant']),
            };
          })
        );

        setColleges(results.filter(Boolean));
      } catch (err) {
        console.error(err);
        setError('There was a problem loading college data.');
      } finally {
        setLoading(false);
      }
    };

    fetchSelectedColleges();
  }, []);

  const filteredColleges = colleges.filter((college) =>
    (college.name + college.location)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="colleges">
      <div className="container">
        <div className="colleges-header">
          <h1>College Search</h1>
          <p>
            Discover colleges that match your interests, goals, and financial
            needs. Our data comes from the U.S. College Scorecard and highlights
            institutions that support first-generation students.
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

        {loading && (
          <div className="no-results">
            <p>Loading colleges…</p>
          </div>
        )}

        {error && !loading && (
          <div className="no-results">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="colleges-grid">
              {filteredColleges.map((college) => (
                <div key={college.id} className="college-card">
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
                      <span className="info-value">
                        {college.acceptanceRate}
                      </span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">💰 Avg Financial Aid:</span>
                      <span className="info-value">
                        {college.avgFinancialAid}
                      </span>
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
                <p>
                  No colleges found matching your search. Try different
                  keywords.
                </p>
              </div>
            )}
          </>
        )}

        <div className="tips-section">
          <h2>College Selection Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Consider Fit</h3>
              <p>
                Look beyond rankings – find a college that matches your academic
                interests and personal values
              </p>
            </div>
            <div className="tip-card">
              <h3>Affordability Matters</h3>
              <p>
                Compare financial aid packages and consider the total cost of
                attendance
              </p>
            </div>
            <div className="tip-card">
              <h3>Support Services</h3>
              <p>
                Research programs specifically designed to support
                first-generation students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colleges;
