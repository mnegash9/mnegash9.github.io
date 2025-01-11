import {React, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PowerApps from "../assets/powerapps-project-demo.jpg"
import PowerBI from "../assets/powerbi-project-demo.jpg"
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

const images = [
  PowerBI,
  PowerApps,
  PowerBI,
  PowerBI,
  PowerApps
];


export default function MainPage() {
  useEffect(() => {
    const observers = [];
    let lastVisibleElement = null; // Track the last visible element
    const updateOpacity = (wrapper, ratio) => {
      // ratio goes from 1 to 0 as element moves out of view
      wrapper.style.setProperty('--visibility', Math.max(0.2, ratio));
    };
  
    const options = {
      threshold: Array.from({ length: 20 }, (_, i) => i / 20) // Create 20 threshold points for smooth transition
    };
  
    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            updateOpacity(currentElement, entry.intersectionRatio);
        });
      }, options);
      
      observer.observe(wrapper);
      observers.push(observer);
    });
  
    // Cleanup
    return () => observers.forEach(obs => obs.disconnect());
  }, []);
  
  return (
    <div id="mainpage" >
      <header className="header">
        <div className="myicon" >
          <nav>
            <Link to="/"><p>matyas.</p></Link>
          </nav>
        </div>
        <div className="mynavbar" >
          <nav>
            <Link to="/about"><p>about</p></Link>
            <Link to="/trips"><p>trips+hobbies</p></Link>
          </nav>
        </div>
      </header>
      <section className="mytitle">
        <div>
          <h1>Matyas</h1>
          <hr></hr>
        </div>
      </section>
      <div className="lead-down">
        <ChevronDoubleDownIcon height={75} width={75} />
        <small>past work</small>
      </div>
      <div style={{ height: "200vh"}}>
        <div className="project-images">
          {images.map((src, index) => (
            <div className="image-wrapper" key={index}>
              <img src={src} alt={`Image ${index + 1}`} className="sticky-image" />
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
      {/* <section className="project-images">
        <img src={PowerBI} alt="PowerBI project image" />
        <hr></hr>
        <img src={PowerApps} alt="PowerApps project image" />
        
      </section> */}
    </div>
  );
}
