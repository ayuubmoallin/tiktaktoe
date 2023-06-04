import { useState } from "react";
import Square from "./Square";
import "./App.css";

function App() {
  // state
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  // props
  const candy = "Reese sticks wafers";

  // funcs
  function handleClick() {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  }

  console.log(new Array(5));

  function calculateWinner(arr) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return `${arr[a]} won!`;
      }
    }
    return "Who will win?";
  }

  return (
    <div className="App">
      <span>{calculateWinner(board)}</span>
      <div className="container">
        {board.map((val, index) => {
          return (
            <Square
              board={board}
              setBoard={setBoard}
              player={player}
              setPlayer={setPlayer}
              squareValue={val}
              index={index}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
