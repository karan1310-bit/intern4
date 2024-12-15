import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const CanvasArea = ({ image }) => {
  const canvasRef = useRef(null);
  const [brushRadius, setBrushRadius] = useState(5);

  const clearCanvas = () => canvasRef.current.clear();

  const saveMask = () => {
    const maskData = canvasRef.current.getSaveData();
    const link = document.createElement("a");
    link.download = "mask.png";
    link.href = canvasRef.current.canvas.drawing.toDataURL();
    link.click();
  };

  return (
    <div>
      {image && (
        <CanvasDraw
          ref={canvasRef}
          imgSrc={image}
          brushRadius={brushRadius}
          lazyRadius={0}
          canvasWidth={600}
          canvasHeight={400}
        />
      )}
      <div>
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={saveMask}>Export Mask</button>
        <input
          type="range"
          min="1"
          max="50"
          value={brushRadius}
          onChange={(e) => setBrushRadius(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default CanvasArea;