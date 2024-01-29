import Players from "./components/Players";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players initialName="player 1" symbol="X" />
          <Players initialName="player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
