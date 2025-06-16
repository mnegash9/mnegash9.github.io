import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import TheBuzz from "../assets/thebuzz-project-demo.png";
import PowerApps from "../assets/powerapps-project-demo.png";
import PowerBI from "../assets/powerbi-project-demo.png";
import TerraCore from "../assets/terracore-project-demo.png";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import Footer from "../components/Footer.jsx";

const projectData = [
  {
    id: 'terracore',
    image: TerraCore,
    path: '/projects/terracore',
    title: 'Terracore Project'
  },
  {
    id: 'thebuzz',
    image: TheBuzz,
    path: '/projects/thebuzz',
    title: 'The Buzz Project'
  },
];

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const observers = [];
    const updateOpacity = (wrapper, ratio) => {
      wrapper.style.setProperty('--visibility', Math.max(0.2, ratio));
    };

    const options = {
      threshold: Array.from({ length: 20 }, (_, i) => i / 20)
    };

    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          updateOpacity(entry.target, entry.intersectionRatio);
        });
      }, options);

      observer.observe(wrapper);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const handleImageClick = (path) => {
    navigate(path);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section>
      <div id="mainpage" style={{ height: "100vh", width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: "center" }}>
        <header className="header">
          <div className="myicon">
            <nav>
              <Link to="/"><p>matyas.</p></Link>
            </nav>
          </div>
          <div className="mynavbar">
            <nav>
              <Link to="/about"><p>about</p></Link>
              {/* <Link to="/trips"><p>trips+hobbies</p></Link> */}
            </nav>
          </div>
        </header>
        <section className="mytitle">
          <div>
            <h1>Matyas</h1>
            <hr />
          </div>
        </section>
        <div className="lead-down">
          <ChevronDoubleDownIcon height={75} width={75} />
          <small>past work</small>
        </div>
        <div className="project-images">
          {projectData.map((project) => (
            <div
              className="image-wrapper"
              key={project.id}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleImageClick(project.path);
                }
              }}>
                <img
                  role="button"
                  onClick={() => handleImageClick(project.path)}
                  src={project.image}
                  alt={project.title}
                  className="sticky-image svg"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    cursor: "pointer",
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.3s ease'
                  }}
                />
            </div>
          ))}
          <div className="image-wrapper" >
            <img src={PowerBI} alt={'Power BI Demo Image'} className="sticky-image" />
          </div>
          <div className="image-wrapper" >
            <img src={PowerApps} alt={'Power Apps Demo Image'} className="sticky-image" />
          </div>
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </section>
  );
}

