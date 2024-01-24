import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import "../assets/style/pages/Home.scss";

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </div>
    </>
  )
}

export default Home;