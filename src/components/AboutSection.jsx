import "../assets/style/components/AboutSection.scss";
import React, { useState, useEffect } from "react";
import ReactCardSlider from "react-card-slider-component";
import firstUser from "../assets/images/per.jpg";
import secondUser from "../assets/images/User-03b.svg";
import thirdUser from "../assets/images/User-07c.svg";

function AboutSection({ aboutRef }) {
  // const slides = [
  //   {
  //     image: firstUser, 
  //     title: "Per Lind Forsberg", 
  //     role: "CEO of Digitalera AB",
  //     description: '"Jonathan har gjort sin praktik hos oss och jobbat med både egna frontend-projekt och skarpa WordPress-projekt till kunder. Han har sinne för både design och programmering, vilket är sällsynt och en bra egenskap i det här yrket. Han är också trevlig och en uppskattad kollega som bidrar till trivsel på kontoret. Jag kan varmt rekommendera honom!"'
  //   }
  // ]
  
  return (
    <div ref={aboutRef} className="about-wrapper">
      <div className="top">
        <div className="top-content">
          <div className="left"></div>
          <div className="right">
            <h2 className="about-heading">Who the heck am I ?</h2>
            <p className="about-para">I'm a web developer with knowledge in both back- and frontend. I like to create modern designs and make them work flawlessly with carefully constructed functions.</p>
            <p className="about-para">My life consists of a healthy balance between work and enjoying life with my wonderful family and any other spare time i spend on my two second favorite interests: art and videogames (which is why i love fullstack development).</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h2 className="testimonial-heading">See what others say about me</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p className="testimonial-card-description">
              "Jonathan har gjort sin praktik hos oss och jobbat med både egna frontend-projekt och skarpa WordPress-projekt till kunder. Han har sinne för både design och programmering, vilket är sällsynt och en bra egenskap i det här yrket.
            </p>
            <p className="testimonial-card-description">
              Han är också trevlig och en uppskattad kollega som bidrar till trivsel på kontoret. Jag kan varmt rekommendera honom!"
            </p>
            <div className="person-container">
              <img className="testimonial-card-image" src={firstUser}></img>
              <div className="person-text-container">
                <h2 className="testimonial-card-title">Per Lind Forsberg</h2>
                <h3 className="testimonial-card-role">CEO of Digitalera AB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blur-ball-right"></div>
      <div className="bg-blur-ball-left"></div>
    </div>
  )
}

export default AboutSection;