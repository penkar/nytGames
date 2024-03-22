import React from "react";
import cn from "classnames";

import "./app.css";

export const Menu = ({ currentGame, setCurrentGame }) => {
  const [slideOutOpen, setSlideOutOpen] = React.useState(false);

  const handleClick = () => setSlideOutOpen(!slideOutOpen);
  const handleGameChange = (gameName) => {
    setCurrentGame(gameName);
    setSlideOutOpen(false);
  };

  React.useEffect(() => {
    const root = document.getElementById("root");
    root.className = currentGame;
  }, [currentGame]);

  return (
    <div id="menu">
      <button className="hamburger" onClick={handleClick}>
        ☰
      </button>
      <div className={cn("slide-out", { open: slideOutOpen })}>
        <ul>
          <li
            className={cn({ current: "spelling_bee" === currentGame })}
            onClick={() => handleGameChange("spelling_bee")}
          >
            Spelling Bee
          </li>
          <li
            className={cn({ current: "sudoku" === currentGame })}
            onClick={() => handleGameChange("sudoku")}
          >
            Sudoku
          </li>
        </ul>
      </div>
    </div>
  );
};
