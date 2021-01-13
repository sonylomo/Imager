import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./Uploaded.module.css";

function Uploaded({ Url, Title, Theme='light' }) {
  const [CopiedTxt, setCopiedTxt] = useState(null);

  const CopyText = () => {
    CopiedTxt.select();
    document.execCommand("copy");
    alert("Link copied!!😎");
  };
  return (
    <div className={`${styles.uploaded} ${Theme}`}>
      <FontAwesomeIcon icon={faCheckCircle} size="3x" color="green" />
      <h3>Uploaded Successfully!</h3>

      <img
        className={styles.uploadedImg}
        width="100"
        height="100"
        src={Url}
        alt={`${Title}`}
      />
      <div className={styles.uploadedInput}>
        {/* image URL from firebase */}
        <input readOnly value={Url} ref={(ref) => setCopiedTxt(ref)} />
        <button variant="light" onClick={CopyText}>
          Copy Link
        </button>
      </div>
    </div>
  );
}

export default Uploaded;
