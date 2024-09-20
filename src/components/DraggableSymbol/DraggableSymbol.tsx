import { Text } from 'react-konva';
import { Player, Point } from '../../types/game';
import { TIC_TAC_TOE_SIZE } from '../../consts/game';
import { PLAYER_COLORS } from '../../consts/UI';
import { useEffect, useRef } from 'react';
import { Text as RefText } from 'konva/lib/shapes/Text';

type DraggableSymbolProps = {
  startingPosition: Point;
  relatedPlayerSymbol: Player;
  cellSize: number;
  size: number;
  draggable: boolean;
  isGameFinished: boolean;
  onCellClicked: (point: Point) => void;
};

const findCellAtLayoutPoint = (layoutPoint: Point, cellSize: number) => {
  const x = Math.floor(layoutPoint.y / cellSize);
  const y = Math.floor(layoutPoint.x / cellSize);

  if (x < 0 || x >= TIC_TAC_TOE_SIZE || y < 0 || y >= TIC_TAC_TOE_SIZE) {
    return null;
  }

  return {
    x,
    y,
  };
};

const DraggableSymbol = ({
  startingPosition,
  relatedPlayerSymbol,
  cellSize,
  onCellClicked,
  size,
  draggable,
  isGameFinished,
}: DraggableSymbolProps) => {
  const ref = useRef<RefText>(null);

  useEffect(() => {
    if (isGameFinished) {
      ref.current?.setPosition({
        x: startingPosition.x,
        y: startingPosition.y,
      });
      ref.current?.show();
    }
  }, [isGameFinished]);

  return (
    <Text
      ref={ref}
      onDragStart={e => {
        e.target.scale({
          x: 2,
          y: 2,
        });
      }}
      onDragEnd={e => {
        e.target.scale({
          x: 1,
          y: 1,
        });

        const point = findCellAtLayoutPoint(e.target.getPosition(), cellSize);

        if (!point) {
          e.target.to({
            x: startingPosition.x,
            y: startingPosition.y,
            duration: 0.2,
          });
          return;
        }

        e.target.hide();

        onCellClicked(point);
      }}
      onMouseEnter={e => {
        const stage = e.target.getStage();

        if (!stage || !draggable) return;

        const container = stage.container();
        container.style.cursor = 'pointer';
      }}
      onMouseLeave={e => {
        const stage = e.target.getStage();

        if (!stage) return;

        const container = stage.container();
        container.style.cursor = 'default';
      }}
      draggable={draggable}
      text={relatedPlayerSymbol}
      fontSize={size}
      x={startingPosition.x}
      y={startingPosition.y}
      width={size}
      height={size}
      fill={PLAYER_COLORS[relatedPlayerSymbol]}
    />
  );
};

export default DraggableSymbol;
