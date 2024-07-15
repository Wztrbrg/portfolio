import "../assets/style/components/StackSection.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass, faReact, faJs, faNodeJs, faPhp, faHtml5, } from '@fortawesome/free-brands-svg-icons'
import AnimatedSection from "./AnimatedSection";


function StackSection({ stackRef }) {
  const stacks = [
    {
      title: "React.js",
      icon: faReact,
    },
    {
      title: "JavaScript",
      icon: faJs,
    },
    {
      title: "HTML",
      icon: faHtml5,
    },
    {
      title: "PHP",
      icon: faPhp,
    },
    {
      title: "Node.js",
      icon: faNodeJs,
    },
    {
      title: "SASS/SCSS",
      icon: faSass,
    },
  ]
  return (
    <>
      <div ref={stackRef} className="stack-wrapper">
        <div className="stack-content">
          <AnimatedSection>
            <div className="stack-header">
              <h2 className="stack-heading">Tech i'm experienced in</h2>
              <p className="stack-para">These are some of the technologies that i've worked the most with</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="stack-card-container">
              {
                stacks.map((stack) =>
                    <div className="stack-card">
                      <FontAwesomeIcon icon={stack.icon} className="stack-card-icon" />
                      <h3 className="stack-card-title">{stack.title}</h3>
                    </div>
                )
              }
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}

export default StackSection;