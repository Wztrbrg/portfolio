import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/NavBar.scss";

function NavBar({ scrollToHero, scrollToProjects, scrollToAbout, scrollToContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 892);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const handleMenuClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <header className={isScrolled ? "top-nav-header visible" : "top-nav-header hidden"}>
        <nav className={isScrolled ? "top-nav visible" : "top-nav hidden"}>
          <button onClick={scrollToHero} className="nav-logo"><h2>Jonathan's</h2></button>
          {!isMobile && (
            <ul>
              <button onClick={scrollToProjects} className={isScrolled ? "nav-item visible" : "nav-item hidden"}>My projects</button>
              <button onClick={scrollToAbout} className={isScrolled ? "nav-item visible" : "nav-item hidden"}>About me</button>
              <button onClick={scrollToContact} className={isScrolled ? "nav-btn visible" : "nav-btn hidden"}>Contact me</button>
            </ul>
          )}
          {isMobile && (
            <div className={!isOpen ? "menu-btn" : "menu-btn close" } onClick={handleMenuClick}>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
          )}
        </nav>
      </header>
      <nav className={isMobile ? `mobile-nav ${isOpen ? 'open' : ''}` : ''}>
        <ul>
          <button onClick={scrollToProjects} className="nav-item">My projects</button>
          <button onClick={scrollToAbout} className="nav-item">About me</button>
          <button onClick={scrollToContact} className="nav-btn">Contact me</button>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;