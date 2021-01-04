import React from "react";
import styles from "./Loader.module.css";

function Loader({ percentage }) {
  return (
    <div className={styles.loader}>
      <p>Uploading...</p>
      <input type="range" value={`${percentage}`} />
    </div>
  );
}

export default Loader;
