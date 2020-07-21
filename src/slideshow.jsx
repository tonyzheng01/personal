import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  AiFillHome,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import kendrick from "./photos/kendrick.jpg";
import tyler from "./photos/tyler.jpg";

class Slideshow extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      photos: [kendrick, tyler],
      captions: [
        [
          "Kendrick Lamar",
          "TDE Championship Tour",
          "XFINITY Theater",
          "6-7-2018",
        ],
        ["Tyler, The Creator", "IGOR Toor", "Agganis Arena", "9-10-2019"],
      ],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === "ArrowLeft") {
      this.handleLeft();
    }
    if (event.key === "ArrowRight") {
      this.handleRight();
    }
  }

  handleLeft() {
    this.setState({
      index: Math.abs((this.state.index - 1) % this.state.photos.length),
    });
  }

  handleRight() {
    this.setState({
      index: Math.abs((this.state.index + 1) % this.state.photos.length),
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (
      <div className="h-full text-center text-white text-opacity-50 font-light">
        <div>
          <Link to="/">
            <IconContext.Provider value={{ size: 50 }}>
              <button className="m-2">
                <AiFillHome />
              </button>
            </IconContext.Provider>
          </Link>
          <div className="m-2">Keyboard navigation is supported!</div>
        </div>

        <div className="flex justify-center photo-height">
          <img
            src={this.state.photos[this.state.index]}
            alt={this.state.captions[0]}
            className="h-full"
          />
        </div>
        <ul className="list-none text-center">
          {this.state.captions[this.state.index].map((c) => (
            <li>{c}</li>
          ))}
        </ul>

        <div className="flex flex-row justify-center">
          <IconContext.Provider value={{ size: 40 }}>
            <button onClick={this.handleLeft}>
              <AiOutlineArrowLeft />
            </button>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: 40 }}>
            <button onClick={this.handleRight}>
              <AiOutlineArrowRight />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default Slideshow;

//h-1 w4 font-normal text-lg
