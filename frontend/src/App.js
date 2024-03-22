import React from "react";
import SpellingBee from "./spellingbee";
import { Menu } from "./utilities";
import { SpellingBeeContext } from "./context/useSpellingBee";

import "./App.css";

const App = () => {
  const [currentGame, setCurrentGame] = React.useState("spelling_bee");
  return (
    <SpellingBeeContext>
      <Menu currentGame={currentGame} setCurrentGame={setCurrentGame} />
      {currentGame === "spelling_bee" && <SpellingBee />}
    </SpellingBeeContext>
  );
};

export default App;
