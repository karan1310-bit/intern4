import React from "react";

const MaskDisplay = ({ originalImage, maskImage }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div>
      <h3>Original Image</h3>
      {originalImage && <img src={originalImage} alt="Original" />}
    </div>
    <div>
      <h3>Mask Image</h3>
      {maskImage && <img src={maskImage} alt="Mask" />}
    </div>
  </div>
);

export default MaskDisplay;