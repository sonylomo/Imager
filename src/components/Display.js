import React, { useState, useEffect } from "react";
import "./Display.css";
import { storage, database } from "./firebase";
// import { Link } from "react-router-dom";
import UploadImg from "./UploadImg";

function Display() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [Image, setImage] = useState();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("Upload done", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });

    handleSubmit(e);
    // <UploadImg Url={url} File={file} />;
  }

  async function handleSubmit(e) {
    //Upload image to firestore
    const imgName = e.target.imgName.value;

    if (!imgName || !url) {
      return;
    }
    await database.collection("images").doc(imgName).set({
      name: imgName,
      image: url,
    });
  }

  useEffect(() => {
    const fetchImages = async () => {
      const imageCollection = await database.collection("images").get();
      setImage(
        imageCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchImages();
  }, []);

  return (
    <div className="display">
      <h3>Upload your image</h3>
      <p>File should be Jpeg, Png...</p>

      {/* file for image upload */}
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <input type="text" name="imgName" placeholder="Image name" />
        <button disabled={!file}> Upload Image</button>
      </form>
      <img width="100" height="100" src={Image} alt="img" />
    </div>
  );
}

export default Display;
