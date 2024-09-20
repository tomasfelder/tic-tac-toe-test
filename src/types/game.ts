export enum Player {
  X = 'X',
  O = 'O',
}

export type Point = {
  x: number;
  y: number;
};

export type GameStatus = {
  finished: boolean;
  winner: Player | null;
  winningCells: Point[] | null;
};

export type GameHistory = {
  [Player.X]: number;
  [Player.O]: number;
};

export type BoardCells = (Player | '')[][];
