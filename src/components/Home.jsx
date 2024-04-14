import React from "react";
import Navbar from "./Navbar";
import {
  About,
  Socialmedia,
  Ourspecial,
  Booknow,
  Footer,
  Services,
  Contact,
} from "./index.js";
function Home() {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Socialmedia />
      </div>
      <div>
        <Ourspecial />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Booknow />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
