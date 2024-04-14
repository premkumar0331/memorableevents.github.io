import React from "react";
import { Link } from "react-router-dom";
import wedding from "../images/weddingshoot.jpg";
import coupleshoot from "../images/coupleshoot.jpg";
import kidsshoot from "../images/kidsshoot.jpg";
import maternityshoot from "../images/maternityshoot.jpg";
import partyandevents from "../images/partyandevents.jpg";
function Services() {
  return (
    <div>
      <div className="service_heading">
        <h3>SERVICES</h3>
        <h1>WHAT WE CAPTURE</h1>
      </div>
      <div className="service_outerbox">
        <div className="service_box1">
          <div className="service_item">
            <div className="service_img">
              <img src={wedding} alt="wedding" />
            </div>
            <div>
              <h2>WEDDING SHOOTS</h2>
            </div>
            <div>
              <p>
                A wedding is once in a lifetime moment and to make that moment a
                memory we will do our best as it makes you feel like you are in
                the wedding you will experience the same kind of emotions once
                again that kind digital visualization we provide.
              </p>
            </div>
            <div className="button">
              <button>
                <Link to="/services">
                  <b>Read More</b>
                </Link>
              </button>
            </div>
          </div>
          <div className="service_item">
            <div className="service_img">
              <img src={coupleshoot} alt="coupleshoot" />
            </div>
            <div>
              <h2>COUPLE SHOOTS</h2>
            </div>
            <div>
              <p>
                Love is all about expressing the feelings of each other. To
                capture those moments and to make it a memorable frame. We
                strive our best to make it happen. We shoot with a unique kind
                of stills in a pleasant location.
              </p>
            </div>
            <div className="button">
              <button>
                <Link to="/services">
                  <b>Read More</b>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="service_box2">
          <div className="service_item">
            <div className="service_img">
              <img src={maternityshoot} alt="maternityshoot" />
            </div>
            <div>
              <h2>MATERNITY SHOOTS</h2>
            </div>
            <div>
              <p>
                The joy when you experience a new life is coming to these world
                from womb within a few months is something that you can’t
                express with the words. To shoot that joy, We do our best to
                make it a memorable…
              </p>
            </div>
            <div className="button">
              <button>
                <Link to="/services">
                  <b>Read More</b>
                </Link>
              </button>
            </div>
          </div>
          <div className="service_item">
            <div className="service_img">
              <img src={kidsshoot} alt="kidsshoot" />
            </div>
            <div>
              <h2>KIDS SHOOTS</h2>
            </div>
            <div>
              <p>
                From the day those tiny legs start walking those are the best
                days to shoot them with the camera and secure that memory in
                your album. We do in a more delightful manner to capture those
                cute little smiles.
              </p>
            </div>
            <div className="button">
              <button>
                <Link to="/services">
                  <b>Read More</b>
                </Link>
              </button>
            </div>
          </div>
          <div className="service_item">
            <div className="service_img">
              <img src={partyandevents} alt="partyandevents" />
            </div>
            <div>
              <h2>EVENTS AND PARTIES</h2>
            </div>
            <div>
              <p>
                Natural, un-posed photography allows people to enjoy their day
                at events or parties. And we always focus on it by delivering
                excellent quality and a seamless experience.
              </p>
            </div>
            <div className="button">
              <button>
                <Link to="/services">
                  <b>Read More</b>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
