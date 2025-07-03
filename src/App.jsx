import { createRoot } from "react-dom/client"
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Trips from "./pages/Trips";
import MainPage from "./pages/MainPage";
import ProjectPage from './pages/ProjectPage';
import NoPage from "./pages/NoPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router onUpdate={() => window.scrollTo(0, 0)} >
        <ScrollToTop />
        <Routes >
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/trips" element={<Trips />} /> */}
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </main>
  );
}