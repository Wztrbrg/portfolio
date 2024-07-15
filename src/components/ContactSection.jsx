import "../assets/style/components/ContactSection.scss";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import AnimatedSection from "./AnimatedSection";

function ContactSection({ contactRef }) {
  
  return (
    <AnimatedSection>
      <div ref={contactRef} className="contact-wrapper">
        <div className="contact-header">
          <h2 className="contact-heading">Want to contact me?</h2>
          <p className="contact-para">I'm available for hire, give me a call or send me a message with a short description of either the position you hire for or a project you want me to join and I will get back to you as soon as possible!</p>
        </div>
        <div className="contact-links">
          <a className="contact-card-green" href="mailto:2jonand@gmail.com" target="blank">
            <FontAwesomeIcon icon={faEnvelope} className="contact-card-icon" />
            <p className="contact-card-para">2jonand@gmail.com</p>
          </a>
          <a className="contact-card-purple" href="tel:+46734640229">
            <FontAwesomeIcon icon={faPhone} className="contact-card-icon" />
            <p className="contact-card-para">073 464 02 29</p>
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ContactSection;