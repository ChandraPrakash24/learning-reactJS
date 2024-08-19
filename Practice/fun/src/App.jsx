import React, { useState } from "react";
import "./App.css";

const CORRECT_CODE = 424242;

function App() {
  // State for storing the input value
  const [code, setCode] = useState("");

  // Handler function for the validate button
  const handleValidate = (e) => {
    e.preventDefault();
    console.log(parseInt(code) === CORRECT_CODE ? "Log in" : "Invalidate code");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleValidate}>
        <input
          type="text"
          placeholder="Enter code"
          className="input-field"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          type="submit"
          className="validate-button"
          onClick={handleValidate}
        >
          Validate
        </button>
      </form>
    </div>
  );
}

export default App;
