import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  AiFillHome,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Kendrick from "./kendrick";
import Tyler from "./tyler";

class Slideshow extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      photos: [<Kendrick />, <Tyler />],
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
    this.setState({ index: Math.abs(this.state.index - 1) });
  }

  handleRight() {
    this.setState({ index: Math.abs(this.state.index + 1) });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-white text-opacity-50 font-light">
        <Link to="/">
          <IconContext.Provider value={{ size: 50 }}>
            <button className="m-2">
              <AiFillHome />
            </button>
          </IconContext.Provider>
        </Link>
        <div className="m-2">Keyboard navigation is supported!</div>

        {this.state.photos[this.state.index % this.state.photos.length]}

        <div className="flex flex-row">
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
