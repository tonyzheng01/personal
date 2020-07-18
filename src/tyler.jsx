import React from "react";
import tyler from "./photos/tyler.jpg";

const Tyler = () => {
  return (
    <div className="h-half">
      <img src={tyler} alt="tyler" className="max-h-full w-auto" />
      <div className="flex flex-col items-center">
        <h1 className="pt-2">Tyler, The Creator</h1>
        <h2>IGOR Toor</h2>
        <h2>Agganis Arena at Bostong University</h2>
        <h2>9-10-2019</h2>
      </div>
    </div>
  );
};

export default Tyler;
