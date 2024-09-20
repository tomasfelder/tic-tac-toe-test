import { useMemo } from 'react';
import { TIC_TAC_TOE_SIZE } from '../consts/game';
import { BORDER_SIZE, CELL_SIZE_BY_RESOLUTION_TYPE, DRAGGABLE_SYMBOL_SIZE_BY_RESOLUTION_TYPE } from '../consts/UI';
import { ResolutioNTypes } from '../types/layout';
import useGetWindowSize from './useGetWindowSize';

const useGetResolutionType = () => {
  const { width } = useGetWindowSize();

  if (width >= 1024) return ResolutioNTypes.Desktop;

  if (width >= 768) return ResolutioNTypes.Tablet;

  return ResolutioNTypes.Mobile;
};

const useGetSizesByResolutionType = () => {
  const resolutionType = useGetResolutionType();

  const cellSize = CELL_SIZE_BY_RESOLUTION_TYPE[resolutionType];
  const draggableSymbolSize = DRAGGABLE_SYMBOL_SIZE_BY_RESOLUTION_TYPE[resolutionType];
  const boardWidth = cellSize * TIC_TAC_TOE_SIZE + BORDER_SIZE * 2;
  const boardHeight = cellSize * TIC_TAC_TOE_SIZE + BORDER_SIZE * 2 + draggableSymbolSize + 10;

  return useMemo(
    () => ({
      cellSize,
      draggableSymbolSize,
      boardWidth,
      boardHeight,
    }),
    [boardHeight, boardWidth, cellSize, draggableSymbolSize],
  );
};

export default useGetSizesByResolutionType;
