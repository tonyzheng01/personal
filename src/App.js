import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TCD from "./images/TCD.jpg";
import Papa from "papaparse";
import lyrics from "./lyrics.csv";
import Banner from "./banner";
import StartScreen from "./startscreen";
import Answers from "./answers";
import Question from "./question";
import Personal from "./personal";
import Slideshow from "./slideshow";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      started: false,
      correct: 0,
      answered: 0,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
  }

  // loads in csv and shuffles
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
    this.setState({ started: true });
  }

  handleCorrect() {
    this.setState({
      correct: this.state.correct + 1,
      answered: this.state.answered + 1,
    });
    this.renderScreen();
  }

  handleIncorrect() {
    this.setState({ answered: this.state.answered + 1 });
    this.renderScreen();
  }

  renderScreen() {
    if (!this.state.loaded) {
      return <h1>Loading...</h1>;
    } else {
      let answers = [];
      for (let i = 0; i <= 3; i++) {
        answers.push(this.state.all_qas[this.state.answered][i]);
      }
      const curr_question = this.state.all_qas[this.state.answered][
        "Question"
      ].replace(/\*/g, "________");
      const curr_ans = this.state.all_qas[this.state.answered]["0"];
      const curr_poss_ans = Object.assign({}, answers);
      const curr_album = this.state.all_qas[this.state.answered]["Album"];
      if (this.state.loaded) {
        return (
          <div className="bg-red-900">
            <Question question={curr_question} />
            <Answers
              corr_ans={curr_ans}
              poss_ans={curr_poss_ans}
              album={curr_album}
              shuffle={this.shuffle}
              clickCorrect={this.handleCorrect}
              clickIncorrect={this.handleIncorrect}
            />
          </div>
        );
      }
    }
  }

  getQuestion(curr) {
    let answers = [];
    for (let i = 0; i <= 3; i++) {
      answers.push(this.state.all_qas[curr][i]);
    }
    this.setState({
      curr_question: this.state.all_qas[curr]["Question"].replace(
        /\*/g,
        "________"
      ),
      curr_ans: this.state.all_qas[curr]["0"],
      curr_poss_ans: Object.assign({}, answers),
      curr_album: this.state.all_qas[curr]["Album"],
    });
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={Personal} exact />
        <Route path="/photos" component={Slideshow} />
      </Switch>
      // <div className="h-screen w-screen">
      //   <div
      //     className="h-full w-full box-border bg-cover bg-center"
      //     style={{
      //       backgroundImage: `url(${TCD})`,
      //     }}
      //     //   filter: `blur(16px)`,
      //     //   height: `100%`,
      //     //   backgroundPosition: `center`,
      //     //   backgroundRepeat: `no-repeat`,
      //     //   backgroundize: `cover`,
      //     // }}
      //   >
      //     <div className="bg-blur">
      //       <h1 className="">HELLO WORLD!</h1>
      //     </div>
      //   </div>
      //   {/* <div className="absolute top-50 left-50 bg-opacity-0 bg-black box-border grid grid-cols-1 gap-1">
      //     <Banner correct={this.state.correct} answered={this.state.answered} />
      //     {this.state.started ? (
      //       this.renderScreen()
      //     ) : (
      //       <StartScreen onStart={this.handleStart} />
      //     )}
      //   </div> */}
      // </div>
    );
  }
}

export default App;
