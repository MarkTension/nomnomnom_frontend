import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Options from "./components/Options";
import Team from "./components/Team";

// get total screen container
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <Options />
        <Team />
      </header>
    </div>
  );
}

export default App;
