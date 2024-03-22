import React from "react";
import SpellingBee from "./spellingbee";
import { Menu } from "./utilities";
import { SpellingBeeContext } from "./context/useSpellingBee";

import "./App.css";

const App = () => {
  const [currentGame, setCurrentGame] = React.useState("spelling_bee");
  return (
    <SpellingBeeContext>
      {currentGame === "spelling_bee" && <SpellingBee />}
      <Menu currentGame={currentGame} setCurrentGame={setCurrentGame} />
    </SpellingBeeContext>
  );
};

export default App;
