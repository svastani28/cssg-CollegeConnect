// src/context/CollegeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const CollegeContext = createContext();

export function CollegeProvider({ children }) {
  const [savedColleges, setSavedColleges] = useState([]);
  const [testScores, setTestScores] = useState({
    sat: '', // user SAT total, 400–1600
    act: '', // user ACT, 1–36
  });

  // Load from localStorage (optional, but nice)
  useEffect(() => {
    const stored = localStorage.getItem('collegeConnectState');
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      if (parsed.savedColleges) setSavedColleges(parsed.savedColleges);
      if (parsed.testScores) setTestScores(parsed.testScores);
    } catch {
      // ignore parse errors
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    const payload = JSON.stringify({ savedColleges, testScores });
    localStorage.setItem('collegeConnectState', payload);
  }, [savedColleges, testScores]);

  const saveCollege = (college) => {
    setSavedColleges((prev) => {
      if (prev.some((c) => c.id === college.id || c.name === college.name)) {
        return prev; // no duplicates
      }
      return [...prev, college];
    });
  };

  const removeCollege = (idOrName) => {
    setSavedColleges((prev) =>
      prev.filter((c) => c.id !== idOrName && c.name !== idOrName)
    );
  };

  const updateScores = (scores) => setTestScores(scores);

  return (
    <CollegeContext.Provider
      value={{ savedColleges, saveCollege, removeCollege, testScores, updateScores }}
    >
      {children}
    </CollegeContext.Provider>
  );
}

export function useCollegeContext() {
  return useContext(CollegeContext);
}
