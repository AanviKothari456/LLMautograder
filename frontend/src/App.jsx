import React, { useState } from "react";
import {
  fetchQuestion,
  generateCode,
  generateTests,
  evaluateSolution,
} from "./api";
import QuestionDisplay from "./components/QuestionDisplay";
import CodeViewer from "./components/CodeViewer";
import TestResults from "./components/TestResults";
import RunButton from "./components/RunButton";

function App() {
  const [question, setQuestion] = useState(null);
  const [code, setCode] = useState("");
  const [tests, setTests] = useState("");
  const [result, setResult] = useState(null);

  const handleNewQuestion = async () => {
    const res = await fetchQuestion();
    setQuestion(res.data);
    const codeRes = await generateCode(res.data);
    const testRes = await generateTests(res.data);
    setCode(codeRes.data.code);
    setTests(testRes.data.tests);
    setResult(null);
  };

  const handleRun = async () => {
    const res = await evaluateSolution(code, tests);
    setResult(res.data.result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>LLM Autograder</h1>
      <button onClick={handleNewQuestion}>New Question</button>
      {question && <QuestionDisplay question={question} />}
      {code && <CodeViewer code={code} />}
      <RunButton onClick={handleRun} disabled={!code || !tests} />
      {result && <TestResults result={result} />}
    </div>
  );
}

export default App;
