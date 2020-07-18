import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import face from "./images/face.png";

const Personal = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-64 text-2xl text-white font-raleway">
      <h1>Hello! Welcome!</h1>
      <h1>This is where</h1>
      <div className="w-full bg-white">
        <h1 className="text-center text-black font-anaglyph">Tony Zheng</h1>
      </div>

      <h1>likes to play around with some web dev technologies.</h1>

      <p>Feel free to check out some stuff: </p>
      <div className="w-full flex justify-evenly items-center">
        <a
          href="https://github.com/tonyzheng01?tab=repositories"
          target="_blank"
        >
          <IconContext.Provider value={{ size: 100 }}>
            <div>
              <AiFillGithub />
            </div>
          </IconContext.Provider>
        </a>
        <a
          href="https://www.linkedin.com/in/tony-zheng-4abb68168/"
          target="_blank"
        >
          <IconContext.Provider value={{ size: 100 }}>
            <div>
              <AiFillLinkedin />
            </div>
          </IconContext.Provider>
        </a>
        <a href="./resume.pdf" target="_blank" className="rounded border-2 p-2">
          Resume
        </a>
        <Link to="/photos" className="rounded border-2 p-2">
          Photos
        </Link>
        <a href="http://google.com" target="_blank">
          <img src={face} alt="Ye Face" className="w-20 h-20" />
        </a>
      </div>
    </div>
  );
};

export default Personal;
