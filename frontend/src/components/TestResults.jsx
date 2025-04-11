import React from "react";

const TestResults = ({ result }) => (
  <div>
    <h3>Test Results</h3>
    <pre>{JSON.stringify(result, null, 2)}</pre>
  </div>
);

export default TestResults;