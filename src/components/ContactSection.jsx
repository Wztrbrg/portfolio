import "../assets/style/components/ContactSection.scss";
import React, { useState, useEffect } from "react";

function ContactSection({ contactRef }) {
  
  return (
    <div ref={contactRef} className="contact-wrapper">
      <div className="left">
        <form className="contact-form">
          <div className="field-container">
            <label className="contact-lbl">Name</label>
            <input type="text" className="contact-input" required />
          </div>
          <div className="field-container">
            <label className="contact-lbl">Company</label>
            <input type="text" className="contact-input" required />
          </div>
          <div className="field-container">
            <label className="contact-lbl">Email address</label>
            <input type="email" className="contact-input" required />
          </div>
          <div className="field-container">
            <label className="contact-lbl">Your message</label>
            <textarea maxLength={500} rows={4} cols={50} className="contact-input" />
          </div>
          <button className="submit-btn">Send</button>
        </form>
      </div>
      <div className="right">
        <div className="top"></div>
        <div className="bottom">
          <h2 className="contact-heading">Hit me up!</h2>
          <p className="contact-para">I'm available for hire, send me a message with a short description of either the position you hire for or a project you want me to join and I will get back to you ASAP!</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;