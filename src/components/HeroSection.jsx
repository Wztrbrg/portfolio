import "../assets/style/components/HeroSection.scss";
import React, { useState, useEffect } from "react";

function HeroSection() {
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
    <div className="hero-wrapper">
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
              <button className="sec-btn">&darr;</button>
              <button className={isScrolled ? "prim-btn hidden" : "prim-btn visible" }>Kontakta mig</button>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default HeroSection;