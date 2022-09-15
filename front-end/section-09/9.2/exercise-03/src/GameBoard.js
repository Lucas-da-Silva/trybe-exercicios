import React, { useContext } from 'react';
import GameContext from './context/GameContext';
import './GameBoard.css';
import GameCell from './GameCell';

function GameBoard() {
  const { gameState: { gameBoard } } = useContext(GameContext);
  return (
    <div className="game-board">
      {gameBoard.map((playerId, i) => (
        <GameCell
          id={i}
          key={i}
          content={playerId}
        />
      ))}
    </div>
  );
}

export default GameBoard;
