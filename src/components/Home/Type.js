import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Frontend Developer",
          "Open Source Contributor",
          "ML Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
