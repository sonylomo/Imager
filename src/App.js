import "./App.css";
import Display from "./components/Display";
import ThemeContext from "../src/components/ThemeContext";
import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [Theme, setTheme] = useState("dark");

  return (
    <div className="App">
      <ThemeContext.Provider
        value={{
          Theme,
          setTheme,
        }}
      >
        <Button/>
        <Display />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
