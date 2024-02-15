import React from "react";
import "./Home.css";
// import Me from "my-react-app/src/assets/images/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "../Home/ScrollDown";
// import Shapes from "../Home/Shapes";

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="intro">
        {/* <img src={Me} alt="avatar" className="home__img" /> */}
        <h1 className="home__name">Chouaib Atrous</h1>
        <span className="home__education">I am a Front-End Developer</span>
        <HeaderSocials />
        <a href="#contact" className=" btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
      {/* <Shapes /> */}
    </section>
  );
};

// export default Home;
