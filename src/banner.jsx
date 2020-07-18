import React from "react";
import nope from "./nope.jpg";
import maybe from "./maybe.jpg";
import yup from "./yup.jpg";

const Banner = (props) => {
  return (
    <div>
      <img src={nope} alt="Kanye's Reaction"></img>
      <h1 className="text-primary font-semibold text-5xl text-center">
        Kanye Said What?
      </h1>
      <h1>
        {props.correct}/{props.answered}
      </h1>
    </div>
  );
};

export default Banner;
