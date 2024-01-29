import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowindex) => (
        <li key={rowindex}>
          {row.map((col, colIndex) => (
            <li key={colIndex}>
              <button></button>
            </li>
          ))}
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
