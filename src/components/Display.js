import React, { useContext, useState } from "react";
// import load from "../assets/loader.gif";
import styles from "./Display.module.css";
import { storage } from "./firebase";
import ThemeContext from "./ThemeContext";
// import Loader from "./Loader";
import Uploaded from "./Uploaded";

function Display({ StoryTheme }) {
  const [message, setMessage] = useState('')

  const { Theme } = useContext(ThemeContext);
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
        var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
        setMessage ("Uploading...")
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

  // function loader() {
  //   return (
  //     <Loader />
  //     // <div>
  //     //   <img src={load} alt="loading..." />
  //     // </div>
  //   );
  // }
  return (
    <>
      {file !== null ? (
        <div className={`${styles.display} ${StoryTheme} ${Theme}`}>
          <h3>Upload your image</h3>
          <p>File should be Jpeg, Png...</p>

          {/* image input to be uploaded */}
          <form className={styles.displayForm} onSubmit={handleUpload}>
            <input
              className={styles.displayInput}
              type="file"
              onChange={handleChange}
            />
            <button
              className={styles.displayBtn}
              disabled={!file}
              // onClick={loader()}
            >
              Upload Image
            </button>
          </form>
          <br/>
          {message}
        </div>
      ) : (
        <Uploaded Url={url} Title={ImgName} />
      )}
    </>
  );
}

export default Display;
