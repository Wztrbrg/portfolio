import "../assets/style/components/CardSlider.scss";
import "../assets/style/components/HeroSection.scss";
import image from "../assets/images/code.jpg";
import { useEffect, useState } from "react";

function CardSlider() {
  const cards = [
    {
      id: 1,
      title: "Card Title1",
      description: "A simple calculator made with JavaScript.",
      image: image,
    },
    {
      id: 2,
      title: "Card Title2",
      description: "A simple calculator made with JavaScript.",
      image: image,
    },
    {
      id: 3,
      title: "Card Title3",
      description: "A simple calculator made with JavaScript.",
      image: image,
    },
    {
      id: 4,
      title: "Card Title4",
      description: "A simple calculator made with JavaScript.",
      image: image,
    },
    {
      id: 5,
      title: "Card Title5",
      description: "A simple calculator made with JavaScript.",
      image: image,
    },
  ]

  const [clickedCard, setClickedCard] = useState(cards[0]);

  const handleCardClick = (card) => {
    setClickedCard(card);
  }


  return (
    <>
      <div className="right">
        <div className="card-wrapper">
          {
            cards.map((card) => 
                <div className="card">
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
        {clickedCard && (
          <div className="display-card">
            <div className="top">
              <img src={clickedCard.image} alt="" />
            </div>
            <div className="bottom">
              <h2 className="display-title">{clickedCard.title}</h2>
              <p className="display-desc">{clickedCard.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CardSlider;