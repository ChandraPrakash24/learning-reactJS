import React, { useState } from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">Footer is selected</p>
    </footer>
  );
};

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="toggle"
          checked={isToggled}
          onChange={handleToggleChange}
          aria-labelledby="toggleLabel"
        />
        <label id="toggleLabel" htmlFor="toggle" className="toggle-label">
          Toggle
        </label>
      </div>
      {isToggled && <Footer />}
      {isToggled && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <>
      <h2>Sample App</h2>
      <Toggle />
    </>
  );
};

export default App;
