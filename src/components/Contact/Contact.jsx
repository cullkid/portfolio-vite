import React, { useContext, useRef } from "react";
import "./Contact.css";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <a href="https://www.linkedin.com/in/anthony-eze-5748b6235/">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
          <div>
            <a href="">ezeanthony3199@gmail.com</a>
          </div>
          <div>
            <a href="">ezeanthony341@gmail.com</a>
          </div>
          <p>+351920542428</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
