import { BoardCells } from '../types/game';

export const TIC_TAC_TOE_SIZE = 3;

export const DRAGGABLE_SYMBOLS = Array.from(
  { length: Math.ceil((TIC_TAC_TOE_SIZE * TIC_TAC_TOE_SIZE) / 2) },
  (_, i) => i,
);

export const INITIAL_BOARD: BoardCells = Array.from({ length: TIC_TAC_TOE_SIZE }, () =>
  Array.from({ length: TIC_TAC_TOE_SIZE }, () => ''),
);
