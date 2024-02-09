import { Link } from "react-router-dom"
import React, { useState, useEffect, useRef } from "react";
import "../assets/style/components/NavBar.scss";

function NavBar({ scrollToHero, scrollToProjects, scrollToAbout }) {
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
    <header className={ isScrolled ? "top-nav-header visible" : "top-nav-header hidden" }>
    
      <nav className={isScrolled ? "top-nav visible" : "top-nav hidden" }>
        <button onClick={scrollToHero} className="nav-logo"><h2>Jonathan's</h2></button>
        <ul>
          <button onClick={scrollToProjects} className={isScrolled ? "nav-item visible" : "nav-item hidden" }>Mina projekt</button>
          <button onClick={scrollToAbout} className={isScrolled ? "nav-item visible" : "nav-item hidden" }>Om mig</button>
          <button className={isScrolled ? "nav-btn visible" : "nav-btn hidden" }>Kontakta mig</button>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;