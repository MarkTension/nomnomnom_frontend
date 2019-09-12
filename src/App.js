import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Engine from "./components/Engine";
import Team from "./components/Team";
import { Box, Flex, Image } from "rebass";

// get total screen container
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Engine />
        <Intro />
        <Team />
      </header>
    </div>
  );
}

export default App;
