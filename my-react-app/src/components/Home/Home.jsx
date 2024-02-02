import React from "react";
import "./Home.css";
import avatar from "../../assets/6284034.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "../Home/ScrollDown";

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="intro">
        <img src={avatar} alt="avatar" className="home__img" />
        <h1 className="home__name">Chouaib Atrous</h1>
        <span className="home__education">I am a Front-End Developer</span>
        <HeaderSocials />
        <a href="#contact" className=" btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
