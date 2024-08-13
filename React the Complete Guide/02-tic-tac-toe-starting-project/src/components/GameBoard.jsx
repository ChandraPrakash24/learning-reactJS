import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ onSquareSelect, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function updateBoard(rowIdx, colIdx) {
  //   setGameBoard((previousGameBoard) => {
  //     const updatedGameBoard = [
  //       ...previousGameBoard.map((prevColInnerArray) => [...prevColInnerArray])
  //     ];
  //     updatedGameBoard[rowIdx][colIdx] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

  // onSquareSelect();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSquareSelect(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
