import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { Link } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ezeanthon3199@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
        <Link
          className="top"
          activeClass="active"
          to="Navbar"
          spy={true}
          smooth={true}
        >
          <BsArrowUp size={25} className="top1" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
