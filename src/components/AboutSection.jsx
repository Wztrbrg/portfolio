import "../assets/style/components/AboutSection.scss";
import React, { useState, useEffect } from "react";

function AboutSection() {
  
  return (
    <div className="about-wrapper">
      <div className="left"></div>
      <div className="right">
        <h2 className="about-heading">Who the heck am I ?!</h2>
        <p className="about-para">I'm a web developer with knowledge in both back- and frontend. I like to create modern designs and make them work flawlessly with carefully constructed functions.</p>
        <p className="about-para">My life consists of a healthy balance between work and enjoying life with my wonderful family and any other spare time i spend on my two second favorite interests: art and videogames (which is why i love fullstack development).</p>
      </div>
    </div>
  )
}

export default AboutSection;