import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ title, status }) {
  const classNameVar = status ? `cell ${status}` : "cell";

  return <span className={classNameVar}>{title}</span>;
}

function Guess({ value, result }) {
  const res = checkGuess(value, result);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          title={res ? res[num].letter : undefined}
          status={res ? res[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
