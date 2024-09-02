import "./App.css";
import React, { useState } from "react";

function Selected({ cnt }) {
  return (
    <div className="container">
      <button className={cnt >= 0 ? "selected-button" : ""}>1</button>
      <button className={cnt >= 1 ? "selected-button" : ""}>2</button>
      <button className={cnt >= 2 ? "selected-button" : ""}>3</button>
    </div>
  );
}

function Text({ data, cnt }) {
  return (
    <div className="text-container">
      <p>{data[cnt]}</p>
    </div>
  );
}

function Button({ children, setCnt }) {
  return <button onClick={setCnt}>{children}</button>;
}

const data = ["learn react", "build project", "apply for job"];

const App = () => {
  const [cnt, setCnt] = useState(0);

  const handleNextClick = () => {
    if (cnt >= 2) return;
    setCnt((prevCnt) => prevCnt + 1);
  };
  const handlePreviousClick = () => {
    if (cnt <= 0) return;
    setCnt((prevCnt) => prevCnt - 1);
  };

  return (
    <div className="container">
      <Selected cnt={cnt} />
      <Text data={data} cnt={cnt} />
      <Button setCnt={handlePreviousClick}>previous</Button>
      <Button setCnt={handleNextClick}>next</Button>
    </div>
  );
};

export default App;
