import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import "../assets/style/pages/Home.scss";

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <ProjectSection></ProjectSection>
      </div>
    </>
  )
}

export default Home;