import { Stage, Layer } from 'react-konva';
import { BORDER_SIZE } from '../../consts/UI';
import { BoardCells, GameStatus, Player, Point } from '../../types/game';
import LogicCell from '../LogicCell/LogicCell';
import useGetSizesByResolutionType from '../../hooks/useGetSizesByResolutionType';
import DraggableSymbol from '../DraggableSymbol/DraggableSymbol';
import { DRAGGABLE_SYMBOLS } from '../../consts/game';

type BoardProps = {
  board: BoardCells;
  onCellClicked: (point: Point) => void;
  finishedGameStatus: GameStatus | null;
  currentPlayer: Player;
};

const Board = ({ board, finishedGameStatus, currentPlayer, onCellClicked }: BoardProps) => {
  const { cellSize, boardHeight, boardWidth, draggableSymbolSize } = useGetSizesByResolutionType();

  const isGameFinished = !!finishedGameStatus?.finished;

  return (
    <Stage width={boardWidth} height={boardHeight}>
      <Layer>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <LogicCell
              key={`${rowIndex}-${colIndex}`}
              boardPoint={{
                x: rowIndex,
                y: colIndex,
              }}
              layoutPoint={{
                x: BORDER_SIZE + colIndex * cellSize,
                y: BORDER_SIZE + rowIndex * cellSize,
              }}
              value={cell}
              onClick={onCellClicked}
              isWinningCell={
                !!finishedGameStatus?.winningCells?.some(point => point.x === rowIndex && point.y === colIndex)
              }
              disabled={isGameFinished}
              size={cellSize}
            />
          )),
        )}

        {DRAGGABLE_SYMBOLS.map((elem, index) => (
          <DraggableSymbol
            key={`${Player.X}-${elem}`}
            size={draggableSymbolSize}
            cellSize={cellSize}
            relatedPlayerSymbol={Player.X}
            startingPosition={{
              x: 10 + index * draggableSymbolSize,
              y: boardHeight - draggableSymbolSize,
            }}
            draggable={Player.X === currentPlayer && !isGameFinished}
            onCellClicked={onCellClicked}
            isGameFinished={isGameFinished}
          />
        ))}

        {DRAGGABLE_SYMBOLS.map((elem, index) => (
          <DraggableSymbol
            key={`${Player.O}-${elem}`}
            size={draggableSymbolSize}
            cellSize={cellSize}
            relatedPlayerSymbol={Player.O}
            startingPosition={{
              x: boardWidth - draggableSymbolSize - index * draggableSymbolSize,
              y: boardHeight - draggableSymbolSize,
            }}
            draggable={Player.O === currentPlayer && !isGameFinished}
            onCellClicked={onCellClicked}
            isGameFinished={isGameFinished}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Board;
