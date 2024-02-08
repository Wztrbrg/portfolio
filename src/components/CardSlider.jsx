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
import { useEffect, useState } from "react";

function CardSlider() {
  const cards = [
    {
      id: 1,
      title: "Bookster",
      description: "Bookster is a concept for a book store inventory management system. It is built with React.js, Express and MongoDB. This project was made for educational purpose during my studies designed to handle creating, updating and deleting information and also searching for specifik items.",
      preview: "https://wztrbrg.github.io/js3-exam/",
      code: "https://github.com/Wztrbrg/js3-exam",
      image: sBookster,
      large: lBookster,
    },
    {
      id: 2,
      title: "Card Title2",
      description: "A simple calculator made with JavaScript.",
      image: sLego,
      large: lLego,
    },
    {
      id: 3,
      title: "Card Title3",
      description: "A simple calculator made with JavaScript.",
      image: sFredag,
      large: lFredag,
    },
    {
      id: 4,
      title: "Card Title4",
      description: "A simple calculator made with JavaScript.",
      image: sKristjan,
      large: lKristjan,
    },
    {
      id: 5,
      title: "Card Title5",
      description: "A simple calculator made with JavaScript.",
      image: sBookster,
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
      <div className="project-content">
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
            <h2 className="projects-heading">Ta en titt på några av mina projekt</h2>
            <p className="projects-para">Några av projekten är arbeten som jag gjort när jag studerade, några är real case arbeten utförda åt företaget jag haft praktik hos</p>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CardSlider;