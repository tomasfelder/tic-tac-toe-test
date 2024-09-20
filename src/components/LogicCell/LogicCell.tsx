import { CELL_FILL_COLOR, PLAYER_COLORS, PLAYER_WINNING_COLORS } from '../../consts/UI';
import { Player, Point } from '../../types/game';
import GraphicCell from '../GraphicCell/GraphicCell';

type CellProps = {
  value: Player | '';
  boardPoint: Point;
  layoutPoint: Point;
  isWinningCell: boolean;
  disabled: boolean;
  size: number;
  onClick: (point: Point) => void;
};

const LogicCell = ({ size, boardPoint, layoutPoint, isWinningCell, disabled, value, onClick }: CellProps) => {
  const { x: layoutX, y: layoutY } = layoutPoint;

  const onCellClick = () => {
    onClick(boardPoint);
  };

  return (
    <GraphicCell
      size={size}
      x={layoutX}
      y={layoutY}
      onClick={!value && !disabled ? onCellClick : undefined}
      text={value}
      cellFill={isWinningCell ? PLAYER_WINNING_COLORS[value as Player] : CELL_FILL_COLOR}
      textFill={value ? PLAYER_COLORS[value] : 'black'}
    />
  );
};

export default LogicCell;
