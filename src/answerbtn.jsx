import React from "react";

const AnswerButton = (props) => {
  return (
    <button
      className="bg-white border hover:border-black py-2 px-4 rounded"
      onClick={props.onClick}
    >
      {props.ans}
    </button>
  );
};

export default AnswerButton;
