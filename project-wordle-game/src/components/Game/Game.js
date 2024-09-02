import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("running");

  return (
    <>
      <PreviousGuesses guesses={guesses} result={answer} />
      <GuessInput setGuesses={setGuesses} />
    </>
  );
}

export default Game;
