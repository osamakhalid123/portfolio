import "../Styles/Home.scss";

import AnimatedText from "react-animated-text-content";
import Fade from "react-reveal/Fade";
import React from "react";

function Home() {
  return (
    <div className="container">
      <div>
        <h1>Hi,</h1>
        <br />
        <h1>
          I'm <span>O</span>sama,
        </h1>
        <br />
        <h1>
          <AnimatedText
            type="chars" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="float"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Frontend Web Developer
          </AnimatedText>
        </h1>
      </div>
      <Fade right>
        <div className="name">O</div>
      </Fade>
    </div>
  );
}

export default Home;
