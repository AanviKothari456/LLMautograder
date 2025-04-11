import React from "react";

const QuestionDisplay = ({ question }) => (
  <div>
    <h2>{question?.title}</h2>
    <pre>{question?.description}</pre>
  </div>
);

export default QuestionDisplay;