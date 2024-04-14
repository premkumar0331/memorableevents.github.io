import React from "react";

function Socialmedia() {
  return (
    <div>
      <div className="socialmedia">
        <div className="smheading">See! What our clients says</div>
        <div className="ytvideos">
          <div className="videoitem">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/osMXReitz0I?si=MAG_3OtePfCuZ5Kh"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="videoitem">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EO3JWdSL1mk?si=CR58gZEMVfJAYy4c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="smheading">visit our instgram profile</div>
        <div className="videoitem2">
          <iframe
            width="360"
            height="720"
            src="https://www.youtube.com/embed/osMXReitz0I?si=MAG_3OtePfCuZ5Kh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Socialmedia;
