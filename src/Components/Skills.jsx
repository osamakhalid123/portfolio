import "../Styles/Skills.scss";

import Fade from "react-reveal/Fade";
import React from "react";
import TagCloud from "react3dtagcloud";

function Skills() {
  const tagName = [
    "HTML",
    "javscript",
    "CSS",
    "TypeScript",
    "Sass",
    "React",
    "Nextjs",
    "Git",
    "Bootstrap",
    "redux",
    "Tailwind",
    "Wordpress",
  ];

  return (
    <div className="skills_Container" id="Skills">
      <div className="Skills_Header">Skills & Experience</div>
      <div className="skill_Container">
        <Fade left>
          <div className="Skill">
            Front-end developer using technologies like
            <span> HTML5, CSS3, JavaScript, React, Bootstrap, Sass ,Git .</span>
            I have a good sence of aesthetics, and experience in responsive,
            mobile-first web designe. i put special effort into optimizing my
            code and proviing the best user experiance . Visit my {""}
            <a href="https://www.linkedin.com/in/osamakhaled797/">Linkdein</a>
            {""} profile for more details. also you can checkout my {""}
            <a href="https://github.com/osamakhalid123">Githup</a>
          </div>
        </Fade>

        <Fade right>
          <div className="TagCloud">
            <TagCloud speed={0} tagName={tagName}></TagCloud>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Skills;
