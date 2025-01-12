import React, { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem"
          }}
          onClick={scrollToTop}
        >
          <ArrowUpCircleIcon className="lead-top-button" style={{height: "70px", width: "70px"}} />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;