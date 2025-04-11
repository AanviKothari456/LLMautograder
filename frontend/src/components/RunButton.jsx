import React from "react";

const RunButton = ({ onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    Run Evaluation
  </button>
);

export default RunButton;
