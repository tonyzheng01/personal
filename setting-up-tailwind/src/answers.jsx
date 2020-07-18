import React, { Component } from "react";
import AnswerButton from "./answerbtn";

class Answers extends Component {
  render() {
    let order = [];
    for (let i = 0; i < 4; i++) {
      order.push(i);
    }
    order = this.props.shuffle(order);
    let answers = [];
    for (const i of order) {
      answers.push(<AnswerButton key={i} ans={this.props.poss_ans[i]} />);
    }
    return <div className="grid grid-cols-2 gap-4 m-12">{answers}</div>;
  }
}

export default Answers;
