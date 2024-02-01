import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turns;
    const { row, col } = square;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((preGameBoard) => {
  //     const updatedBoard = [
  //       ...preGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
