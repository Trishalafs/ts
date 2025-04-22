import { useState } from 'react';
import { motion } from 'framer-motion';

const BOARD_SIZE = 11;
const CENTER = { row: Math.floor(BOARD_SIZE / 2), col: Math.floor(BOARD_SIZE / 2) };

const initializeBoard = () => {
  return Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));
};

export default function App() {
  const [board, setBoard] = useState(initializeBoard);
  const [player, setPlayer] = useState("black");
  const [captures, setCaptures] = useState({ black: 0, white: 0 });
  const [winner, setWinner] = useState(null);

  // Check if a cell coordinate is valid.
  const isValid = (row, col) =>
    row >= 0 && col >= 0 && row < BOARD_SIZE && col < BOARD_SIZE;

  // Check if the move is adjacent to an existing stone.
  const isAdjacent = (row, col) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];
    return directions.some(([dx, dy]) => {
      const r = row + dx, c = col + dy;
      return isValid(r, c) && board[r][c] !== null;
    });
  };

  // Check and perform captures.
  const checkCaptures = (row, col, currentPlayer, board) => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
      [0, -1],
      [-1, 0],
      [-1, -1],
      [-1, 1]
    ];

    let newBoard = board.map(r => [...r]);
    let newCaptures = { ...captures };

    directions.forEach(([dx, dy]) => {
      const r1 = row + dx, c1 = col + dy;
      const r2 = row + 2 * dx, c2 = col + 2 * dy;
      const r3 = row + 3 * dx, c3 = col + 3 * dy;

      if (
        isValid(r1, c1) &&
        isValid(r2, c2) &&
        isValid(r3, c3) &&
        newBoard[r1][c1] !== null &&
        newBoard[r1][c1] !== currentPlayer &&
        newBoard[r2][c2] !== null &&
        newBoard[r2][c2] !== currentPlayer &&
        newBoard[r3][c3] === currentPlayer
      ) {
        // Remove the opponent's stones (capture).
        newBoard[r1][c1] = null;
        newBoard[r2][c2] = null;
        newCaptures[currentPlayer] += 2;
      }
    });

    setBoard(newBoard);
    setCaptures(newCaptures);

    return newCaptures;
  };

  // Check if there are 5 (or more) consecutive stones in any direction.
  const checkWinByLine = (row, col, currentPlayer, board) => {
    const directions = [
      [0, 1],   // horizontal
      [1, 0],   // vertical
      [1, 1],   // diagonal down-right
      [1, -1]   // diagonal down-left
    ];

    for (let [dx, dy] of directions) {
      let count = 1;

      // Count in the positive direction.
      for (let i = 1; i < 5; i++) {
        const r = row + i * dx;
        const c = col + i * dy;
        if (isValid(r, c) && board[r][c] === currentPlayer) {
          count++;
        } else {
          break;
        }
      }
      // Count in the negative direction.
      for (let i = 1; i < 5; i++) {
        const r = row - i * dx;
        const c = col - i * dy;
        if (isValid(r, c) && board[r][c] === currentPlayer) {
          count++;
        } else {
          break;
        }
      }
      if (count >= 5) return true;
    }
    return false;
  };

  const handleClick = (row, col) => {
    // Do not allow moves if the cell is taken or the game is over.
    if (board[row][col] !== null || winner) return;

    // Enforce the first move to be at the center.
    const isBoardEmpty = board.every(r => r.every(cell => cell === null));
    if (isBoardEmpty && (row !== CENTER.row || col !== CENTER.col)) {
      alert(`First move must be at the center (${CENTER.row}, ${CENTER.col}).`);
      return;
    }

    // For non-first moves, require the move to be adjacent to an existing stone.
    if (!isBoardEmpty && !isAdjacent(row, col)) {
      alert("Move must be adjacent to an existing stone.");
      return;
    }

    // Place the stone.
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = player;
    setBoard(newBoard);

    // Check for captures.
    const updatedCaptures = checkCaptures(row, col, player, newBoard);

    // Check for win conditions:
    // 1. Five or more in a row.
    // 2. Capturing five pairs (10 stones).
    if (checkWinByLine(row, col, player, newBoard) || updatedCaptures[player] >= 10) {
      setWinner(player);
    } else {
      setPlayer(player === "black" ? "white" : "black");
    }
  };

  const resetGame = () => {
    setBoard(initializeBoard());
    setPlayer("black");
    setCaptures({ black: 0, white: 0 });
    setWinner(null);
  };

  return (
    <div className="game-container">
      <header>
        <h1>PENTE</h1>
        <p className="instructions">
          Click on an empty intersection to place your stone.
          The first move must be at the center.
          Subsequent moves must be adjacent to an existing stone.
          Win by forming five (or more) in a row or by capturing five pairs of your opponent’s stones.
        </p>
      </header>
      <div className="board">
        {board.map((rowArray, rowIndex) => (
          <div key={rowIndex} className="row">
            {rowArray.map((cell, colIndex) => (
              <motion.div
                key={colIndex}
                className={`cell ${cell ? cell : ""}`}
                onClick={() => handleClick(rowIndex, colIndex)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cell && <div className={`coin ${cell}`} />}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="info">
        {winner ? (
          <div className="winner">
            <h2>{winner.toUpperCase()} wins!</h2>
            <button onClick={resetGame}>Play Again</button>
          </div>
        ) : (
          <>
            <div className="status">Next Player: <span>{player.toUpperCase()}</span></div>
            <div className="captures">
              <span>Black Captures: {captures.black}</span> | <span>White Captures: {captures.white}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
