import "../assets/style/components/AboutSection.scss";
import React, { useState, useEffect } from "react";
import ReactCardSlider from "react-card-slider-component";
import firstUser from "../assets/images/User-02a.svg";
import secondUser from "../assets/images/User-03b.svg";
import thirdUser from "../assets/images/User-07c.svg";

function AboutSection({ aboutRef }) {
  const slides = [
    {image: firstUser, title: "Testimonial Title", description: "I leave this testimonial here."},
    {image: secondUser, title: "Testimonial Title", description: "I leave this testimonial here."},
    {image: thirdUser, title: "Testimonial Title", description: "I leave this testimonial here."},
    {image: firstUser, title: "Testimonial Title", description: "I leave this testimonial here."},
    {image: secondUser, title: "Testimonial Title", description: "I leave this testimonial here."},
    {image: thirdUser, title: "Testimonial Title", description: "I leave this testimonial here."},
  ]
  
  return (
    <div ref={aboutRef} className="about-wrapper">
      <div className="top">
        <div className="left"></div>
        <div className="right">
          <h2 className="about-heading">Who the heck am I ?</h2>
          <p className="about-para">I'm a web developer with knowledge in both back- and frontend. I like to create modern designs and make them work flawlessly with carefully constructed functions.</p>
          <p className="about-para">My life consists of a healthy balance between work and enjoying life with my wonderful family and any other spare time i spend on my two second favorite interests: art and videogames (which is why i love fullstack development).</p>
        </div>
      </div>
      <div className="bottom">
        <h2 className="testimonial-heading">See what the people I have worked with has to say about me</h2>
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  )
}

export default AboutSection;