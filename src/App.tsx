import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import "./App.css";

const App: React.FC = () => {
  const [stageSize, setStageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeScreen = () => {
    const handleResize = () => {
      setStageSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };
  useEffect(resizeScreen, []);

  return (
    <div className="App">
      <Stage width={stageSize.width} height={stageSize.height}>
        <Layer>
          {/* Background */}
          <Rect
            x={0}
            y={0}
            width={stageSize.width}
            height={stageSize.height}
            fill="white"
          />

          {/* Instruction Text */}
          <Text
            x={0}
            y={100}
            width={stageSize.width}
            text="Implement your game here!"
            fontSize={24}
            fill="black"
            align="center"
            verticalAlign="middle"
          />

          {/* Example X */}
          <Text
            x={stageSize.width * 0.25}
            y={stageSize.height * 0.4}
            text="X"
            fontSize={40}
            fill="blue"
            align="center"
            verticalAlign="middle"
          />

          {/* Example O */}
          <Text
            x={stageSize.width * 0.75}
            y={stageSize.height * 0.4}
            text="O"
            fontSize={40}
            fill="red"
            align="center"
            verticalAlign="middle"
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
