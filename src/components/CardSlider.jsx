import "../assets/style/components/CardSlider.scss";
import "../assets/style/components/HeroSection.scss";
import sLego from "../assets/images/lego-preview.png";
import sFredag from "../assets/images/fredags-preview.png";
import sModerat from "../assets/images/emoderaterna-preview.png";
import sBowling from "../assets/images/eskilstunabowling-preview.png";
import sHallbar from "../assets/images/hallbarservice-preview.png";
import sLeads from "../assets/images/leadsgenie-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";


function CardSlider({ projectsRef }) {
  const cards = [
    {
      id: 1,
      title: "Hållbar Fastighetsservice Syd",
      description: "This website is developed by me as a freelance project for a client. I took care of designing and branding the website according to the clients wishes, as well as SEO and content for the website. The website is built with React.JS.",
      preview: "https://www.hallbarservice.se",
      code: "",
      image: sHallbar,
    },
    {
      id: 2,
      title: "Leadsgenie",
      description: "A website I built as a freelance project for a client. Developed as a custom theme for WordPress based on the design provided by Designit Media.",
      preview: "",
      code: "",
      image: sLeads,
    },
    {
      id: 3,
      title: "Brick Canvas",
      description: "Brick Canvas is a service where a user can upload their image, edit it and turn it into a Lego-like mosaic. The service is built with React.js and uses Canvas for the image editing and processing.",
      preview: "https://wztrbrg.github.io/brick-canvas/",
      code: "https://github.com/Wztrbrg/brick-canvas",
      image: sLego,
    },
    {
      id: 4,
      title: "Eskilstuna Bowlingcenter",
      description: "During my internship I got the chance to update the website for Eskilstuna Bowlingcenter. At first I worked alone but later on the team collaborated to finish the project. Built mainly using WordPress and Elementor PRO, with some custom components built php.",
      preview: "https://eskilstunabowling.se/",
      code: "",
      image: sBowling,
    },
    {
      id: 5,
      title: "Eskilstunamoderaterna",
      description: "Eskilstunamoderaterna is a website that is built on WordPress with Elementor PRO and utilizes the Bedrock boilerplate with Deployer. This project is for a real client and was made during my internship.",
      preview: "https://eskilstunamoderaterna.se",
      code: "",
      image: sModerat,
    },
    {
      id: 6,
      title: "Fredagskollegiet",
      description: "Fredagskollegiet is a single-page website that is built on WordPress with Elementor PRO and utilizes the Bedrock boilerplate with Deployer. This project is for a real client and was made during my internship.",
      preview: "https://fredagskollegiet.se",
      code: "",
      image: sFredag,
    },
  ]

  const [clickedCard, setClickedCard] = useState();
  const [active, setActive] = useState();

  const handleCardClick = (card) => {
    setClickedCard(card);
    setActive(card.id);
  }

  const handleClose = () => {
    setClickedCard(null);
    setActive(null);
  }

  return (
    <>
      <AnimatedSection>
        <div ref={projectsRef} className="project-content">
            <div className="projects-header">
              <h2 className="projects-heading">Take a look at some of my projects</h2>
              <p className="projects-para">Some are school projects, and some are real-life cases made for clients during my internship at a web agency in Eskilstuna</p>
            </div>
            <div className="card-wrapper">
              {
                cards.map((card) => 
                    <div className={card.id === active ? "card active" : "card deactive"}>
                      <FontAwesomeIcon icon={faX} className="close" onClick={handleClose} />
                      <div className="top" onClick={() => handleCardClick(card)}>
                        <img className="card-img" src={card.image} />
                      </div>
                      <div className="bottom">
                        <h2 className="display-title">{card.title}</h2>
                        <p className="display-desc">{card.description}</p>
                        <div className="link-container">
                          {card.preview !== "" &&
                            <a className="display-link" href={card.preview} target="_blank" rel="noreferrer">Demo</a>
                          }
                          {card.code != "" && 
                            <a className="display-link" href={card.code} target="_blank" rel="noreferrer">Code</a>                 
                          }
                          {card.preview === "" && card.code === "" &&
                            <p className="display-no-link">Due to confidentiality there is no demo or code</p>
                          }
                        </div>
                      </div>
                    </div>
                )
              }
            </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default CardSlider;