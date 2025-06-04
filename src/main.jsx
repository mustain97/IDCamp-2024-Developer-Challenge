import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './pages/Home';
import CareerQuiz from './pages/CareerQuiz';
import LearningRoadmap from './pages/LearningRoadmap';
import ProgressDashboard from './pages/ProgressDashboard';
import ForumDiscussion from './pages/ForumDiscussion';
import CvGenerator from './pages/CvGenerator';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<CareerQuiz />} />
        <Route path="/roadmap" element={<LearningRoadmap />} />
        <Route path="/dashboard" element={<ProgressDashboard />} />
        <Route path="/forum" element={<ForumDiscussion />} />
        <Route path="/cv" element={<CvGenerator />} />
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex gap-6 justify-center shadow-md">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/quiz" className="hover:underline">Career Quiz</Link>
        <Link to="/roadmap" className="hover:underline">Learning Roadmap</Link>
        <Link to="/dashboard" className="hover:underline">Progress Dashboard</Link>
        <Link to="/forum" className="hover:underline">Forum</Link>
        <Link to="/cv" className="hover:underline">CV Generator</Link>
      </nav>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);
