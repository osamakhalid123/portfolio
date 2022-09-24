import "../Styles/NavBar.scss";

import React, { useState } from "react";
import {
  faBars,
  faEnvelope,
  faEye,
  faGear,
  faHome,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [mobile, setmobile] = useState(false);

  const handleMobile = () => {
    setmobile(!mobile);
  };
  return (
    <div className="nav-bar">
      <Link
        to="/"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        style={{ textDecoration: "none" }}
      >
        <div className="Logo">O</div>
      </Link>
      <div className={mobile ? "a-icons active" : "a-icons"}>
        <NavLink className="homeIcon" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <Link
          to="Skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="Skills"
        >
          <FontAwesomeIcon icon={faGear} />
        </Link>
        <Link
          to="MyWork"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="MyWork"
        >
          <FontAwesomeIcon icon={faEye} />
        </Link>

        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="Contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>

        <FontAwesomeIcon
          onClick={handleMobile}
          className="Close"
          icon={faXmark}
        />
      </div>
      <div className={mobile ? "Social active" : "Social"}>
        <a href="https://www.linkedin.com/in/osamakhaled797/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/osamakhalid123">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <FontAwesomeIcon
        onClick={handleMobile}
        className="Mobile_menu"
        icon={faBars}
      />
    </div>
  );
}

export default NavBar;
