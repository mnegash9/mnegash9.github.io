import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import TheBuzz from "../assets/thebuzz-project-demo.svg";
import PowerApps from "../assets/powerapps-project-demo.svg";
import PowerBI from "../assets/powerbi-project-demo.svg";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

const projectData = [
  {
    id: 'thebuzz',
    image: TheBuzz,
    path: '/projects/thebuzz',
    title: 'The Buzz Project'
  },
  {
    id: 'powerbi',
    image: PowerBI,
  },
  {
    id: 'powerapps',
    image: PowerApps,
  }
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

  return (
    <div id="mainpage">
      <header className="header">
        <div className="myicon">
          <nav>
            <Link to="/"><p>matyas.</p></Link>
          </nav>
        </div>
        <div className="mynavbar">
          <nav>
            <Link to="/about"><p>about</p></Link>
            <Link to="/trips"><p>trips+hobbies</p></Link>
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
      <div style={{ height: "200vh" }}>
        <div className="project-images">
          {projectData.map((project) => (
            <div 
              className="image-wrapper" 
              key={project.id}
              onClick={() => handleImageClick(project.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleImageClick(project.path);
                }
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="sticky-image"
              />
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

