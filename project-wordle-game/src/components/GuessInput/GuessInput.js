import React, { useState } from "react";

function GuessInput({ setGuesses }) {
  const [guessTerm, setGuessTerm] = useState("");

  function handleGuessSubmit(e) {
    e.preventDefault();

    if (guessTerm.length < 5 || guessTerm.length > 5 || !guessTerm.trim())
      return;

    console.log(guessTerm);

    setGuesses((prevGuesses) => [...prevGuesses, guessTerm]);

    setGuessTerm("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guessTerm}
        onChange={(e) => setGuessTerm(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
