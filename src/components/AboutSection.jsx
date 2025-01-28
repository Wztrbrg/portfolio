import "../assets/style/components/AboutSection.scss";
import React, { useState, useEffect } from "react";
import firstUser from "../assets/images/per.jpg";
import secondUser from "../assets/images/client.jpg";
import AnimatedSection from "./AnimatedSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutSection({ aboutRef }) {
  const reviews = [
    {
      title: 'Per Lind Forsberg',
      role: 'VD Digitalera AB',
      description: '"Jonathan har gjort sin praktik hos oss och jobbat med både egna frontend-projekt och skarpa WordPress-projekt till kunder. Han har sinne för både design och programmering, vilket är sällsynt och en bra egenskap i det här yrket. Han är också trevlig och en uppskattad kollega som bidrar till trivsel på kontoret. Jag kan varmt rekommendera honom!"',
      image: firstUser,
    },
    {
      title: 'Andreas Jamous',
      role: 'VD Hållbar Fastighetsservice Syd AB',
      description: '"npmJonathan Andersson hjälpte mig att skapa en professionell och användarvänlig hemsida som överträffade mina förväntningar. Han var lyhörd, snabb med svar och kom med kreativa lösningar. Jag rekommenderar honom varmt till andra företag som behöver en skicklig webbutvecklare!"',
      image: secondUser,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };
  
  return (
    <AnimatedSection>
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
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className="testimonial-card">
                  <p className="testimonial-card-description">
                    {review.description}
                  </p>
                  <div className="person-container">
                    <img className="testimonial-card-image" src={review.image}></img>
                    <div className="person-text-container">
                      <h2 className="testimonial-card-title">{review.title}</h2>
                      <h3 className="testimonial-card-role">{review.role}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="bg-blur-ball-right"></div>
        <div className="bg-blur-ball-left"></div>
      </div>
    </AnimatedSection>
  )
}

export default AboutSection;