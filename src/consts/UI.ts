import { Player } from '../types/game';
import { ResolutioNTypes } from '../types/layout';
import { TIC_TAC_TOE_SIZE } from './game';

export const CELL_SIZE = 100;
export const BORDER_SIZE = 4;

export const CELL_FILL_COLOR = '#cdd7da';
export const CELL_WINNING_FILL_COLOR = '#ff0000';
export const CELL_TEXT_COLOR = '#000';
export const CELL_HOVER_FILL_COLOR = '#b0bfc3';
export const CELL_STROKE_COLOR = '#000';

export const BOARD_LENGTH = CELL_SIZE * TIC_TAC_TOE_SIZE + BORDER_SIZE * 2;

export const CELL_SIZE_BY_RESOLUTION_TYPE = {
  [ResolutioNTypes.Desktop]: 130,
  [ResolutioNTypes.Tablet]: 110,
  [ResolutioNTypes.Mobile]: 90,
};

export const DRAGGABLE_SYMBOL_SIZE_BY_RESOLUTION_TYPE = {
  [ResolutioNTypes.Desktop]: 30,
  [ResolutioNTypes.Tablet]: 25,
  [ResolutioNTypes.Mobile]: 20,
};

export const PLAYER_COLORS = {
  [Player.X]: '#093848',
  [Player.O]: '#800020',
};

export const PLAYER_WINNING_COLORS = {
  [Player.X]: '#accbd3',
  [Player.O]: '#d1b6bf',
};
