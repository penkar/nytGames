import React from "react";
import { useBoard } from "../contexts/useBoard";

export const Header = () => {
  const { actions } = useBoard();
  const clickMenu = () => actions?.toggleMenu(true);

  const standAlone = window.matchMedia("(display-mode: standalone)").matches;
  React.useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    if (standAlone) {
      body.className = "stand-alone";
    } else {
      body.className = "web-app";
    } 
  }, [standAlone]);

  return (
    <div className="control-panel__header">
      <div className="control-panel__icon" onClick={clickMenu}>
        &#9776;
      </div>
      <div className="control-panel__title">Sudoku</div>
    </div>
  );
};
