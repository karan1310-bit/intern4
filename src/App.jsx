import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import CanvasArea from "./components/CanvasArea";
import MaskDisplay from "./components/MaskDisplay";

const App = () => {
  const [image, setImage] = useState(null);
  const [mask, setMask] = useState(null);

  const handleMaskSave = (maskData) => setMask(maskData);

  return (
    <div className="App">
      <h1>Image Inpainting Widget</h1>
      <ImageUpload onImageUpload={setImage} />
      {image && (
        <div className="CanvasContainer">
          <CanvasArea image={image} />
        </div>
      )}
      {image && mask && (
        <div className="MaskDisplay">
          <MaskDisplay originalImage={image} maskImage={mask} />
        </div>
      )}
    </div>
  );
};

export default App;