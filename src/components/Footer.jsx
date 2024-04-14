import React from "react";
import { Link, NavLink } from "react-router-dom";
import footer_logo from "../images/mmlogo1.png";

function Footer() {
  return (
    <div className="footer_outer">
      <div className="footer_inner1">
        <div className="footer_logo">
          <div>
            <img src={footer_logo} alt="logo" />
          </div>
          <div className="footer_text">
            <p>
              Magical Moments Studios is a wedding photography and
              cinematography studio based out in the city of Vijayawada.
            </p>
          </div>
        </div>
        <div className="footer_box">
          <div className="footer_item">
            <div>
              <h2>NAVIGATION</h2>
            </div>
            <div className="footer_list">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/about">ABOUT</NavLink>
              <NavLink to="/contact">CONTACT</NavLink>
              <NavLink to="/">TERMS & CONDITIONS</NavLink>
            </div>
          </div>
          <div className="footer_item">
            <div>
              <h2>OUR SERVICES</h2>
            </div>
            <div className="footer_list">
              <NavLink to="/">WEDDING SHOOTS</NavLink>
              <NavLink to="/">COUPLE SHOOTS</NavLink>
              <NavLink to="/">MATERNITY SHOOTS</NavLink>
              <NavLink to="/">KIDS SHOOTS</NavLink>
              <NavLink to="/">EVENTS & PARTIES</NavLink>
              <NavLink to="/">POST SHOOT SERVICES</NavLink>
            </div>
          </div>
          <div className="footer_item">
            <div>
              <h2>CONTACT</h2>
            </div>
            <div className="footer_listbox">
              <div className="footer_list2">
                <p>Plot No: 220, Road No: 07,</p>
                <p>New P & T (Postal) Colony, Pantakaluva road, Patamata, </p>
                <p>Near Priya Children hospital,</p>
                <p>Vijayawada. Pin: 520 010</p>
              </div>
              <div>
                <Link to="/contact">
                  <i class="far fa-envelope"></i> info@magicalmomentsstudios.com
                </Link>
                <p>
                  <i class="fas fa-phone"></i>{" "}
                  <span className="whatsapp">9705 594 003</span>
                </p>
                <p>
                  <i class="fab fa-whatsapp"></i>{" "}
                  <span className="whatsapp">9346 748 653</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_inner2">
        <div className="copyright">
          <p>Copyright © 2024 Magical Moments Studios</p>
          <p>Designed by the Friend</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
