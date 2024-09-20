import { Group, Rect, Text } from 'react-konva';
import { BORDER_SIZE, CELL_HOVER_FILL_COLOR } from '../../consts/UI';

type GraphicCellProps = {
  cellFill: string;
  textFill: string;
  text: string;
  size: number;
  x: number;
  y: number;
  onClick?: () => void;
};

const GraphicCell = ({ x, y, size, text, onClick, cellFill, textFill }: GraphicCellProps) => (
  <Group
    x={x}
    y={y}
    onClick={onClick}
    onTap={onClick}
    width={size}
    height={size}
    onMouseEnter={e => {
      const stage = e.target.getStage();

      if (!stage || !onClick) return;

      const container = stage.container();
      container.style.cursor = 'pointer';
    }}
    onMouseLeave={e => {
      const stage = e.target.getStage();

      if (!stage) return;

      const container = stage.container();
      container.style.cursor = 'default';
    }}
  >
    <Rect
      width={size}
      height={size}
      fill={cellFill}
      stroke="black"
      strokeWidth={BORDER_SIZE}
      onMouseEnter={e => {
        if (!onClick) return;

        e.target.setAttr('fill', CELL_HOVER_FILL_COLOR);
      }}
      onMouseLeave={e => {
        e.target.setAttr('fill', cellFill);
      }}
    />
    {text ? (
      <Text
        text={text}
        fontSize={Math.round((size * 2) / 3)}
        fill={textFill}
        align="center"
        verticalAlign="middle"
        width={size}
        height={size}
      />
    ) : null}
  </Group>
);

export default GraphicCell;
