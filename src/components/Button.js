import React from "react";
// import styles from "./Button.module.css";
import './Button.css';

function Button({Theme, children}) {
  return (
    <button className={`themeButton ${Theme}`} >
      {children}
    </button>
  );
}

export default Button;
