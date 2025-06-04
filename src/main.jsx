import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './pages/Home';
import CareerQuiz from './pages/CareerQuiz';
import LearningRoadmap from './pages/LearningRoadmap';
import ProgressDashboard from './pages/ProgressDashboard';
import ForumDiscussion from './pages/ForumDiscussion';
import CvGenerator from './pages/CvGenerator';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/quiz">Career Quiz</Link>
        <Link to="/roadmap">Learning Roadmap</Link>
        <Link to="/dashboard">Progress Dashboard</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/cv">CV Generator</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<CareerQuiz />} />
        <Route path="/roadmap" element={<LearningRoadmap />} />
        <Route path="/dashboard" element={<ProgressDashboard />} />
        <Route path="/forum" element={<ForumDiscussion />} />
        <Route path="/cv" element={<CvGenerator />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
