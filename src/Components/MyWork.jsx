import "../Styles/MyWork.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

function MyWork() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 785,
        settings: {
          dots: true,
          infinite: true,
          speed: 600,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          rows: 2,
        },
      },
    ],
  };
  return (
    <div className="projects" id="MyWork">
      <h1>Projects</h1>
      <Slider className="slide" {...settings}>
        <div className="project">
          <img src="/Assets/Screenshot (74).png" alt="E-commerce" />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/Ecommerce-Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://ecommerce-site-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/Assets/Screenshot (75).png" alt="Disney-Plus-Clone" />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/Disney-Plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://disney-plus-pi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="/Assets/Screenshot (77).png"
            alt="Crypto-currency Price Tracker App"
            target="_blank"
            rel="noopener noreferrer"
          />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/crypto-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://crypto-app-ecru.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/Assets/Screenshot (78).png" alt="Tesla-Clone-Website" />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/tesla-web-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://tesla-web-clone.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/Assets/Screenshot (81).png" alt="Finance-Landing-Page" />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/finance-landing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://finance-landing-page.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/Assets/Screenshot (82).png" alt="Insure-landing-page" />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/insure-landing-page-master"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://insure-landing-page-master-rose.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/Assets/Screenshot (171).png" alt="Book Store" />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/booksy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://booksy-bice.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/Assets/Screenshot (175).png" alt="To-do-App" />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/Todo-App-With-Redux-Toolkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://todo-app-with-redux-toolkit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/Assets/Screenshot (173).png" alt="News App" />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/News-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://news-app-indol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <img
            src="/Assets/Screenshot (174).png"
            alt="rock-paper-scissors-game"
          />
          <div className="links">
            <a
              href="https://github.com/osamakhalid123/Rock--Paper--Scissors-Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Githup
            </a>
            <a
              href="https://rock-paper-scissors-game-mocha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MyWork;
