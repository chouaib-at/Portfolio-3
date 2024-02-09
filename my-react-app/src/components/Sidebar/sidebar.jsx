import React from "react";
import "./sidebar.css";
// import Logo from "../../assets/Logo.png";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#logo" className="nav_logo">
        {/* <img src={Logo} alt="" /> */}
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#Home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#About" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#Portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#Blog" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#Contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; 2024.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
