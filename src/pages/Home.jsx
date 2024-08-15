import { useRef } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import StackSection from "../components/StackSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import "../assets/style/pages/Home.scss";

function Home() {
  const heroRef = useRef(null);
  const stackRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  const scrollToStack = () => {
    stackRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
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
          scrollToStack={scrollToStack}
          scrollToProjects={scrollToProjects}
          scrollToAbout={scrollToAbout}
          scrollToContact={scrollToContact}
        />
        <HeroSection scrollToContact={scrollToContact} scrollToStack={scrollToStack} contactRef={contactRef} stackRef={stackRef} heroRef={heroRef} />
        <StackSection stackRef={stackRef} />
        <ProjectSection projectsRef={projectsRef} />
        <AboutSection aboutRef={aboutRef} />
        <ContactSection contactRef={contactRef} />
      </div>
    </>
  )
}

export default Home;