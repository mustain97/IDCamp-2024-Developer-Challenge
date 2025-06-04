import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CareerQuiz from "./pages/CareerQuiz";
import LearningRoadmap from "./pages/LearningRoadmap";
import ProgressDashboard from "./pages/ProgressDashboard";
import ForumDiscussion from "./pages/ForumDiscussion";
import CvGenerator from "./pages/CvGenerator";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CareerQuiz />} />
        <Route path="/roadmap" element={<LearningRoadmap />} />
        <Route path="/dashboard" element={<ProgressDashboard />} />
        <Route path="/forum" element={<ForumDiscussion />} />
        <Route path="/cv" element={<CvGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;