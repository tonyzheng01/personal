import React, { Component } from "react";
import Papa from "papaparse";
import lyrics from "./lyrics.csv";
import Banner from "./banner";
import StartScreen from "./startscreen";
import Answers from "./answers";
import Question from "./question";
import HelloWrapper from "./hellowrapper";

class App extends Component {
  constructor() {
    super();
    this.state = { loaded: false, started: false, correct: 0, answered: 0 };
    this.handleStart = this.handleStart.bind(this);
  }

  componentDidMount() {
    fetch(lyrics)
      .then((response) => response.text())
      .then((data) =>
        this.shuffle(Papa.parse(data, { header: true })["data"].slice(0, -1))
      )
      .then((shuffled) => {
        this.setState({
          all_qas: shuffled,
          loaded: true,
        });
      });
  }

  shuffle(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleStart() {
    let answers = [];
    for (let i = 1; i <= 4; i++) {
      answers.push(this.state.all_qas[0][i]);
    }
    this.setState({
      curr_question: this.state.all_qas[0]["Question"].replace(
        /\*/g,
        "________"
      ),
      curr_ans: this.state.all_qas[0]["1"],
      curr_poss_ans: Object.assign({}, answers),
      curr_album: this.state.all_qas[0]["Album"],
      counter: 0,
      started: true,
    });
  }

  renderScreen() {
    if (this.state.started) {
      if (this.state.loaded) {
        return (
          <div className="bg-red-900">
            <Question question={this.state.curr_question} />
            <Answers
              corr_ans={this.state.curr_ans}
              poss_ans={this.state.curr_poss_ans}
              album={this.state.curr_album}
              shuffle={this.shuffle}
            />
          </div>
        );
      } else {
        return <h1>Loading...</h1>;
      }
    } else {
      return <StartScreen onStart={this.handleStart} />;
    }
  }

  render() {
    return (
      <div>
        <div className="theme-TCD">
          <div className="bg-primary">
            <h1 className="text-secondary">Hello</h1>
          </div>
        </div>
        <div className="theme-LR">
          <div className="bg-primary">
            <h1 className="text-secondary">Late Registration</h1>
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="theme-TCD">
//       <h1 className="text-primary">Hello World!</h1>
//     </div>
//   );
// }

export default App;
