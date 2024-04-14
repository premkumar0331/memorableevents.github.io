import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="aboutbox">
      <div>
        <h3>About Us</h3>
      </div>
      <div>
        <h2>WE DO AWESOME THINGS</h2>
      </div>
      <div>
        <b>Magical Moments Studios</b> is a wedding photography and
        cinematography studio based out in the city of Vijayawada. we are a team
        of highly effective, creative and responsible with 4-6 years of
        experience in this field.
      </div>
      <div>
        <p>
          we understand the importance of special and real moments of their Big
          day. so our team believes in capturing those moments and makes your
          day very memorable.
        </p>
      </div>
      <div>
        <div className="button">
          <button>
            <Link to="/about">
              <b>Read More</b>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
