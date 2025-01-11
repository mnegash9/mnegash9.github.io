import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contacts";
import Trips from "./pages/Trips";
import MainPage from "./pages/MainPage";
import ProjectPage from './pages/ProjectPage';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Routes>
      </Router>
    </main>
  );
}