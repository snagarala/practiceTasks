import React, { useState, useEffect } from "react";

export default function TicTackToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [isWinner, setIsWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWinner(board) {
    for (let pattern of winningCombinations) {
      let [a, b, c] = pattern;
      if (
        (board[a] && board[a] === board[b] && board[a]) === board[c] //squares[0] === squares[1] === squares[2] === "X",
      ) {
        return board[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (board[index] || isWinner) return; // Prevent move if square is filled or game has a winner

    const newSquares = [...board];
    newSquares[index] = currentPlayer ? "X" : "O";
    setBoard(newSquares);

    //To display X and O
    const isAnyWinner = calculateWinner(newSquares);
    if (isAnyWinner) {
      setIsWinner(isAnyWinner); // Set winner if found
    } else {
      setCurrentPlayer(!currentPlayer); // Only toggle turn if no winner yet
    }
    // if(isAnyWinner(newSquares){
    //     setIsWinner(true);
    //     return;
    // })
    // setCurrentPlayer(isXPlayer === "X" ? "0" : "X");
  }
  //To Reset Game
  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(true);
    setCurrentPlayer(null);
  }

  return (
    <div className="w-[800px] h-[600px] border flex flex-col items-center justify-center bg-indigo-100 text-black">
      {/* // <div className=""> */}
      <div className="squares grid grid-cols-3 grid-rows-3 p-2 rounded-md border border-gray-300">
        {board.map((square, index) => (
          <button
            className="w-24 h-24 text-3xl text-black font-bold flex items-center justify-center border border-black rounded-md hover:bg-gray-100"
            key={index}
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>

      {/* //To dispaly Winner and Next player */}
      {/* <div className="flex flex-col "> */}
      <div className="mt-4 text-xl text-black font-bold">
        {isWinner
          ? ` Winner is : ${isWinner}`
          : ` Next Player: ${currentPlayer ? "X" : "O"}`}
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
}
