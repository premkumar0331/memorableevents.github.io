import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/mmlogo2.png";
import weddingslide_1 from '../images/weddingslides/weddingslide_1.jpg'
import slide_5 from '../images/weddingslides/slide_5.jpg'
import slidecolor2 from '../images/weddingslides/slidecolor2.jpg'
import slidecolor3 from '../images/weddingslides/slidecolor3.jpg'

function Navbar() {
  const [clicked, setClicked] = useState(true);
  const [navbar, setNavbar] = useState(true);

  const handleClick = () => setClicked(!clicked);

  const handleNavbar = () => {
    if (window.scrollY > 0) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener("scroll", handleNavbar);

  return (
    <div >
      <div id='slider'>
        <figure>
          <img src={weddingslide_1} alt="slide4" />
          <img src={slide_5} alt="slide5" />
          <img src={slidecolor2} alt="slidecolor2" />
          <img src={slidecolor3} alt="slidecolor3" />
          <img src={weddingslide_1} alt="weddingslide_1" />
        </figure>
      </div>
      <nav className={navbar ? "navbar" : "navbar sticky"}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logoimage" />
          </Link>
        </div>
        <div className={clicked ? "menu active" : "menu"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">
                Services <i class="fa fa-angle-down fa-sm"></i>
              </NavLink>
              <div>
                <ul>
                  <li>
                    <NavLink to="/">Wedding Shoots</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Couple Shoots</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Maternity Shoots</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Kids Shoots</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink to="/photoshootservices">Photo-shoot Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <div className="button_nav">
                <button>
                  <NavLink to="/getquote">Getquote</NavLink>
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="mobile" onClick={() => handleClick()}>
          <i className={clicked ? "fas fa-bars" : "fas fa-times"}></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
