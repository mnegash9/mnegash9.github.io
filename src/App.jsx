import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contacts";
import Trips from "./pages/Trips";
import MainPage from "./pages/MainPage";
import Skills from "./pages/Skills";
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </Router>
    </main>
  );
}

