import React, { useState } from "react";
import "./Display.css";
import { storage } from "./firebase";
// import { Link } from "react-router-dom";
import UploadImg from "./UploadImg";

function Display() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
    <UploadImg Url={url} File={file} />;
  }

  return (
    <div className="display">
      <h3>Upload your image</h3>
      <p>File should be Jpeg, Png...</p>

      {/* file for image upload */}
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />

        <button disabled={!file}> Upload Image</button>
      </form>
      <img src={url} alt={file} />
    </div>
  );
}

export default Display;
