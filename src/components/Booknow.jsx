import React from "react";
import { Link } from "react-router-dom";

function Booknow() {
  return (
    <div>
      <div className="booknow">
        <h3>BOOK YOUR EVENT WITH</h3>
        <h2>MAGICAL MOMENTS STUDIOS</h2>
        <div className="button">
          <button>
            <Link to="/contact">
              <b>BOOK NOW</b>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booknow;
