import { useRef } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import "../assets/style/pages/Home.scss";

function Home() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return (
    <>
      <div className="home-wrapper">
        <NavBar
          scrollToHero={scrollToHero}
          scrollToProjects={scrollToProjects}
          scrollToAbout={scrollToAbout}
          scrollToContact={scrollToContact}
        />
        <HeroSection scrollToContact={scrollToContact} scrollToProjects={scrollToProjects} contactRef={contactRef} projectsRef={projectsRef} heroRef={heroRef} />
        <ProjectSection projectsRef={projectsRef} />
        <AboutSection aboutRef={aboutRef} />
        <ContactSection contactRef={contactRef} />
      </div>
    </>
  )
}

export default Home;