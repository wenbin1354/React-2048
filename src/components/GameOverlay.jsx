import React from "react";
const GameOverlay = ({ onRestart, board }) => {
	if (board.hasWon()) {
		return <div className="tile2048"></div>;
	} else if (board.hasLost()) {
		return (
			<div className="gameOver">
				<button
					style={{
						"margin-top": "75%",
						width: "45%",
						height: "15%",
						"border-radius": "25px",
						cursor: "pointer",
						"font-size": "30px",
						"font-weight": "bold",
					}}
					onClick={onRestart}
				>
					Restart
				</button>
				<p>Better Luck Next Time</p>
			</div>
		);
	}

	return null;
};

export default GameOverlay;
