import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import Mentorship from './pages/Mentorship';
import Colleges from './pages/Colleges';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/colleges" element={<Colleges />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;