import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GameContext from './GameContext';

function Provider({ children }) {
  const [gameState, setGame] = useState({
    activePlayer: 1,
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  function resetGame() {
    setGame({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }

  function toggleActivePlayer() {
    const { activePlayer } = gameState;
    if (activePlayer === 1) return 2;
    return 1;
  }

  function updateState(cellClicked) {
    setGame(({ gameBoard, activePlayer }) => {
      const newState = [...gameBoard];
      let newActivePlayer = activePlayer;

      if (gameBoard[cellClicked] === 0) {
        newState[cellClicked] = activePlayer;
        newActivePlayer = toggleActivePlayer();
      } else newState[cellClicked] = gameBoard[cellClicked];

      return {
        activePlayer: newActivePlayer,
        gameBoard: newState,
      };
    });
  }

  const context = { gameState, resetGame, updateState };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
