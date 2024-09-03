import "./App.css";
import React, { useState } from "react";

function Slot({ count, text, setStep, setCount, step }) {
  function handleIncriment() {
    text === "Step"
      ? setStep((prevStep) => prevStep + 1)
      : setCount((prevCount) => prevCount + step);
  }
  function handleDecrement() {
    text === "Step"
      ? setStep((prevStep) => prevStep - 1)
      : setCount((prevCount) => prevCount - step);
  }

  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <span>
        {text}: {text === "Step" ? step : count}{" "}
      </span>
      <button onClick={handleIncriment}>+</button>
    </>
  );
}

function Display({ days }) {
  function getFutureDateString(dayCount) {
    // Get today's date
    const today = new Date();

    // Calculate the future date
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + dayCount);

    // Define options for date formatting
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const futureDateString = futureDate.toLocaleDateString("en-US", options);

    // Format the output string
    return `${dayCount} days from today is ${futureDateString}`;
  }

  return (
    <p>
      {/* {count} days from Today is {} */}
      {getFutureDateString(days)}
    </p>
  );
}

function App() {
  const [step, setStep] = useState(5);
  const [count, setCount] = useState(5);

  return (
    <>
      <Slot
        step={step}
        count={count}
        text={"Step"}
        setStep={setStep}
        setCount={setCount}
      />
      <Slot
        step={step}
        count={count}
        text={"Count"}
        setCount={setCount}
        setStep={setStep}
      />
      <Display days={count} />
    </>
  );
}

export default App;
