import React, { useState } from "react";
import load from "./loader.gif";
import styles from "./Display.module.css";
import { storage } from "./firebase";
// import Loader from "./Loader/Loader";
import Uploaded from "./Uploaded";

function Display() {
  const [file, setFile] = useState("");
  const [ImgName, setImgName] = useState("");
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
    setImgName(e.target.files[0].name);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      function (snapshot) {
        loader();
        var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
        
      },
      console.error,
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setFile(null);
            setURL(url);
          });
      }
    );
  }

  function loader() {
    return (
      <div>
        <img src={load} alt="loading..." />
      </div>
    );
  }
  return (
    <>
      {file !== null ? (
        <div className={styles.display}>
          <h3>Upload your image</h3>
          <p>File should be Jpeg, Png...</p>

          {/* image input to be uploaded */}
          <form className={styles.displayForm} onSubmit={handleUpload}>
            <input className={styles.displayInput} type="file" onChange={handleChange} />
            <button className={styles.displayBtn} disabled={!file}>Upload Image</button>
          </form>
        </div>
      ) : (
        <Uploaded Url={url} Title={ImgName} />
      )}
    </>
  );
}

export default Display;
