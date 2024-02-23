import Player from "./Components/Players";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player symbol="X" initialname="Player 1" />
            <Player symbol="O" initialname="Player 2" />
          </ol>
          --Gameboard
        </div>
        --Log
      </main>
    </>
  );
}

export default App;
