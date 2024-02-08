import CardSlider from "../components/CardSlider";
import "../assets/style/components/ProjectSection.scss";

function ProjectSection({ projectsRef }) {
  return (
    <>
      <div className="projects-wrapper">
        <CardSlider projectsRef={projectsRef}></CardSlider>
      </div>
    </>
  )
}

export default ProjectSection;