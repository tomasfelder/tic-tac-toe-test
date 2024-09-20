import { TIC_TAC_TOE_SIZE } from '../consts/game';
import { BoardCells, GameStatus, Player, Point } from '../types/game';

function getGameStatus(board: BoardCells, selectedPoint: Point, movesCount: number): GameStatus {
  if (movesCount < TIC_TAC_TOE_SIZE * 2 - 1) {
    return {
      finished: false,
      winner: null,
      winningCells: null,
    };
  }

  const { x, y } = selectedPoint;

  // This is just for typescript
  const winner = board[x][y] !== '' ? (board[x][y] as Player) : null;

  // Check row
  if (board[x].every(cell => cell === board[x][y])) {
    return {
      finished: true,
      winner,
      winningCells: Array.from({ length: TIC_TAC_TOE_SIZE }, (_, i) => ({
        x,
        y: i,
      })),
    };
  }

  // Check column
  if (board.every(row => row[y] === board[x][y])) {
    return {
      finished: true,
      winner,
      winningCells: Array.from({ length: TIC_TAC_TOE_SIZE }, (_, i) => ({
        x: i,
        y,
      })),
    };
  }

  // Check diagonal
  if (x === y && board.every((row, i) => row[i] === board[x][y])) {
    return {
      finished: true,
      winner,
      winningCells: Array.from({ length: TIC_TAC_TOE_SIZE }, (_, i) => ({
        x: i,
        y: i,
      })),
    };
  }

  // Check anti-diagonal
  if (x + y === TIC_TAC_TOE_SIZE - 1 && board.every((row, i) => row[TIC_TAC_TOE_SIZE - 1 - i] === board[x][y])) {
    return {
      finished: true,
      winner,
      winningCells: Array.from({ length: TIC_TAC_TOE_SIZE }, (_, i) => ({ x: i, y: TIC_TAC_TOE_SIZE - 1 - i })),
    };
  }

  if (movesCount === TIC_TAC_TOE_SIZE * TIC_TAC_TOE_SIZE) {
    return {
      finished: true,
      winner: null,
      winningCells: null,
    };
  }

  return {
    finished: false,
    winner: null,
    winningCells: null,
  };
}

export default getGameStatus;
