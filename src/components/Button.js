import React, { useContext, useState } from "react";
// import styles from "./Button.module.css";
import "./Button.css";
import ThemeContext from "./ThemeContext";

function Button({ StoryTheme, children }) {
  const { Theme, setTheme } = useContext(ThemeContext);
  const [Emoji, setEmoji] = useState("🌚")
  // const value = Theme === "dark" ? `${Theme} 🌙` : `${Theme} 🌞`;

  function onClick() {
    if (Theme === "light") {
      setTheme("grey");
      setEmoji ( "🌓");
      console.log("grey theme");
    }
    if (Theme === "grey") {
      setTheme("dark");
      setEmoji ("🌚");
      console.log("dark theme");
    }
    if (Theme === "dark") {
      setTheme("light");
      setEmoji("🌝");
      console.log("light theme");
    }
  }
  return (
    <button className={`themeButton  ${Theme} ${StoryTheme}`} onClick={onClick}>
      {Emoji} {children || Theme}
    </button>
  );
}

export default Button;
