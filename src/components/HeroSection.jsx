import "../assets/style/components/HeroSection.scss";
import React, { useState, useEffect } from "react";

function HeroSection({ scrollToContact, scrollToProjects, contactRef, heroRef, projectsRef }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={heroRef} className="hero-wrapper">
      <div className="right-bg-cover">
        <div className="right-bg-cover-inner"></div>
      </div>
      <div className="hero-content">
        <div className="left">
          <div className="heading">
            <h1 className="hero-heading">Hi! I'm <span>Jonathan</span></h1>
            <h2 className="hero-heading">a Design Inspired</h2>
            <h2 className="hero-heading">Full-Stack Developer</h2>
            <div className="btn-container">
              <button onClick={scrollToProjects} className="sec-btn">&darr;</button>
              <button onClick={scrollToContact} className={isScrolled ? "prim-btn hidden" : "prim-btn visible" }>Kontakta mig</button>
            </div>
          </div>
        </div>
        <div ref={projectsRef} className="right"></div>
      </div>
    </div>
  )
}

export default HeroSection;