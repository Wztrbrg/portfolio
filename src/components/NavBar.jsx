import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import "../assets/style/components/NavBar.scss";

function NavBar() {
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
        <Link to={"/"}><h2 className="nav-logo">Jonathan's</h2></Link>
        <ul>
          <Link to={"/about"} className={isScrolled ? "nav-item visible" : "nav-item hidden" }>Om mig</Link>
          <Link to={"/projects"} className={isScrolled ? "nav-item visible" : "nav-item hidden" }>Mina projekt</Link>
          <button className={isScrolled ? "nav-btn visible" : "nav-btn hidden" }>Kontakta mig</button>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;