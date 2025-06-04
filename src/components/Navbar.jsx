import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4 shadow-md">
      <ul className="flex gap-4 justify-center">
        <li><Link to="/">Career Quiz</Link></li>
        <li><Link to="/roadmap">Learning Roadmap</Link></li>
        <li><Link to="/dashboard">Progress Dashboard</Link></li>
        <li><Link to="/forum">Forum Diskusi</Link></li>
        <li><Link to="/cv">CV Generator</Link></li>
      </ul>
    </nav>
  );
}