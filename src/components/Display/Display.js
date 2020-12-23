import React from "react";
import "./Display.css";

function Display() {
  return (
    <div className="display">
      <h3>Upload your image</h3>
      <p>File should be Jpeg, Png...</p>

      <input type="file" />
    </div>
  );
}

export default Display;
