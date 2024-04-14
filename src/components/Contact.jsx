import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="contact_box">
        <h3>
          We are just a distance of one call. Let Us Join. To unfold the Magical
          Moments!
        </h3>
        <div className="button">
          <button>
            <Link to="/contact">
              <b>Call Now</b>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
