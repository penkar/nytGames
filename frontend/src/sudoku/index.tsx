import React from "react";

import { Board } from "./components/Board";
import { ControlPanel } from "./components/ControlPanel";
import { Numpad } from "./components/Numpad";

import "./App.css";

const App = () => (
  <>
    <Board />
    <ControlPanel />
    <Numpad />
  </>
);

export default App;
