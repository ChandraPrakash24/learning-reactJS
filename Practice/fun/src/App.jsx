import "./App.css";
import React, { useState, useRef } from "react";

export default function App() {
  const myRef = useRef(null);

  return (
    <div>
      <input ref={myRef} type="text" />
      <button type="button" onClick={() => myRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}
