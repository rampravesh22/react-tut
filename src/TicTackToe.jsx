import React, { useState } from "react";

function TicTacToe() {
	// State to store the current game board
	const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

	// State to store the current player (X or O)
	const [currentPlayer, setCurrentPlayer] = useState("X");

	// Function to handle clicks on the game board
	const handleClick = (index) => {
		// Get a copy of the current game board
		const newBoard = [...board];

		// If the clicked cell is already occupied, do nothing
		if (newBoard[index] !== "") {
			return;
		}

		// Update the clicked cell with the current player's symbol
		newBoard[index] = currentPlayer;

		// Switch to the other player
		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

		// Update the game board
		setBoard(newBoard);
	};

	return (
		<div className="game">
			{/* Render the game board */}
			<div className="board">
				{board.map((cell, index) => (
					<div
						key={index}
						className="cell"
						onClick={() => handleClick(index)}
					>
						{cell}
					</div>
				))}
			</div>
		</div>
	);
}

export default TicTacToe;
