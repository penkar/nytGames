import SpellingBee from "./spellingbee";
import { SpellingBeeContext } from "./context/useSpellingBee";

import "./App.css";

function App() {
  return (
    <SpellingBeeContext>
      <SpellingBee />
    </SpellingBeeContext>
  );
}

export default App;
