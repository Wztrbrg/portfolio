import "../assets/style/components/HeroSection.scss";
import React, { useState, useEffect } from "react";

function HeroSection({ scrollToContact, scrollToStack, contactRef, heroRef, stackRef }) {
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
      <div className="hero-content">
        <div className="heading">
          <h1 className="hero-heading drop-in-1">Hi! I'm <span>Jonathan</span>, a Design Inspired Full-Stack Developer</h1>
          <div className="btn-container drop-in-2">
            <button onClick={scrollToStack} className="sec-btn">&darr;</button>
            <button onClick={scrollToContact} className={isScrolled ? "prim-btn hidden" : "prim-btn visible" }>Contact me</button>
          </div>
        </div>
      </div>
      <div className="bg-blur-ball-right"></div>
      <div className="bg-blur-ball-left"></div>
    </div>
  )
}

export default HeroSection;