import React from "react";

const Banner = (props) => {
  return (
    <div>
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
