import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));

    setGameTurn((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updateTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Players
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          turns={gameTurn}
        />
      </div>

      <Log />
    </main>
  );
}

export default App;
