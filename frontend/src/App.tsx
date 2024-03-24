import React from "react";
import SpellingBee from "./spellingbee";
import Wordle from "./wordle";
import { Menu } from "./utilities";
import {
  GuessContextProvider,
  ModalContextProvider,
  SpellingBeeContext,
  StatsContextProvider,
} from "./context";

import "./App.css";

const App = () => {
  const [currentGame, setCurrentGame] = React.useState("spelling_bee");
  return (
    <GuessContextProvider>
      <ModalContextProvider>
        <SpellingBeeContext>
          <StatsContextProvider>
            {currentGame === "spelling_bee" && <SpellingBee />}
            {currentGame === "wordle" && <Wordle />}
            <Menu currentGame={currentGame} setCurrentGame={setCurrentGame} />
          </StatsContextProvider>
        </SpellingBeeContext>
      </ModalContextProvider>
    </GuessContextProvider>
  );
};

export default App;
