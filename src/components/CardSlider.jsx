import "../assets/style/components/CardSlider.scss";
import "../assets/style/components/HeroSection.scss";
import sBookster from "../assets/images/bookster-preview.png";
import lBookster from "../assets/images/bookster-large.png";
import sLego from "../assets/images/lego-preview.png";
import lLego from "../assets/images/lego-large.png";
import sFredag from "../assets/images/fredags-preview.png";
import lFredag from "../assets/images/fredags-large.png";
import sKristjan from "../assets/images/kristjan-preview.png";
import lKristjan from "../assets/images/kristjan-large.png";
import sModerat from "../assets/images/emoderaterna-preview.png";
import lModerat from "../assets/images/emoderaterna-large.png";
import { useEffect, useState } from "react";

function CardSlider({ projectsRef }) {
  const cards = [
    {
      id: 1,
      title: "Brick Canvas",
      description: "Brick Canvas is a service where a user can upload their image, edit it and turn it into a Lego-like mosaic. The service is built with React.js and uses Canvas for the image editing and processing.",
      preview: "https://wztrbrg.github.io/brick-canvas/",
      code: "https://github.com/Wztrbrg/brick-canvas",
      image: sLego,
      large: lLego,
    },
    {
      id: 2,
      title: "Bookster",
      description: "Bookster is a concept for a book store inventory management system. It is built with React.js, Express and MongoDB. This project was made for educational purpose during my studies designed to handle creating, updating and deleting information and also searching for specific items.",
      preview: "https://wztrbrg.github.io/js3-exam/",
      code: "https://github.com/Wztrbrg/js3-exam",
      image: sBookster,
      large: lBookster,
    },
    {
      id: 3,
      title: "Eskilstunamoderaterna",
      description: "Eskilstunamoderaterna is a website that is built on WordPress with Elementor PRO and utilizes the Bedrock boilerplate with Deployer. This project is for a real client and was made during my internship.",
      preview: "",
      code: "",
      image: sModerat,
      large: lModerat,
    },
    {
      id: 4,
      title: "Fredagskollegiet",
      description: "Fredagskollegiet is a single-page website that is built on WordPress with Elementor PRO and utilizes the Bedrock boilerplate with Deployer. This project is for a real client and was made during my internship.",
      preview: "",
      code: "",
      image: sFredag,
      large: lFredag,
    },
    {
      id: 5,
      title: "Kristjan Andresson",
      description: "Kristjanandresson is a single-page website that is built on WordPress with Elementor PRO and utilizes the Bedrock boilerplate with Deployer. This project is for a real client and was made during my internship.",
      preview: "",
      code: "",
      image: sKristjan,
      large: lKristjan,
    },
  ]

  const [clickedCard, setClickedCard] = useState(cards[0]);
  const [active, setActive] = useState(cards[0].id);

  const handleCardClick = (card) => {
    setClickedCard(card);
    setActive(card.id);
  }

  return (
    <>
      <div ref={projectsRef} className="project-content">
        <div className="left">
          <div className="card-wrapper">
            {
              cards.map((card) => 
                  <div className={card.id == active ? "card active" : "card deactive"}>
                    <div key={card.id} className="overlay" onClick={() => handleCardClick(card)}></div>
                    <img className="card-img" src={card.image} />
                    <h2 className="card-title">{card.title}</h2>
                  </div>
              )
            }
          </div>
          <div className="projects-header">
            <h2 className="projects-heading">Take a look at some of my projects</h2>
            <p className="projects-para">Some are school projects, and some are real-life cases made for clients during my internship at a web agency in Eskilstuna</p>
          </div>
        </div>
        <div className="display-wrapper">
          <div className="left-bg-cover">
            <div className="left-bg-cover-inner"></div>
          </div>
          {clickedCard && (
            <div className="display-card">
              <div className="top">
                <img src={clickedCard.large} alt="" />
              </div>
              <div className="bottom">
                <h2 className="display-title">{clickedCard.title}</h2>
                <p className="display-desc">{clickedCard.description}</p>
                <div className="link-container">
                  <a className="display-link" href={clickedCard.preview} target="_blank">Check out this project</a>
                  {clickedCard.code != "" && 
                    <a className="display-link" href={clickedCard.code} target="_blank">See the code</a>                 
                  }
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CardSlider;