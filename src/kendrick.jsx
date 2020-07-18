import React from "react";
import kendrick from "./photos/kendrick.jpg";

const Kendrick = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-half">
        <img src={kendrick} alt="kendrick" className="max-h-full" />
      </div>
      <h1 className="pt-2">Kendrick Lamar</h1>
      <h2>TDE Championship Tour</h2>
      <h2>XFINITY Theater, Hartford, CT</h2>
      <h2>6-7-2018</h2>
    </div>
  );
};

export default Kendrick;
