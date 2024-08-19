import React, { useState } from "react";
import "./App.css";

const GradientDisplay = () => {
  const [colorArr, setColorArr] = useState([
    "#FF0000",
    "#00FF00",
    "#FFC0CB",
    "#FFC0CB",
    "#FFC0CB",
  ]);

  const [visible, setVisible] = useState(2);

  function handleRemoveColor() {
    if (visible <= 2) return;

    setVisible(visible - 1);
  }

  function handleAddColor() {
    if (visible >= 5) return;

    setVisible(visible + 1);
  }

  const gradientStyle = {
    background: `linear-gradient(to right, ${colorArr
      .slice(0, visible)
      .join(", ")})`,
  };

  return (
    <div>
      <div>
        <button onClick={handleRemoveColor}>Remove Color</button>{" "}
        <button onClick={handleAddColor}>Add Color</button>
      </div>

      {/* Gradient Display Window */}
      <div className="grad" style={gradientStyle}>
        {/* This is the gradient display area */}
      </div>

      {/* Color Options */}
      <div>
        {colorArr.slice(0, visible).map((_, index) => (
          <div key={index}>
            <label>Color {index + 1}: </label>
            <input
              type="color"
              value={colorArr[index]}
              onChange={(e) => {
                const nextCol = [...colorArr];
                nextCol[index] = e.target.value;
                setColorArr(nextCol);
              }}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientDisplay;
