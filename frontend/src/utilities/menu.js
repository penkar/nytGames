import React from "react";
import classNames from "classnames";

import "./app.css";

export const Menu = ({ currentGame, setCurrentGame }) => {
  const [slideOutOpen, setSlideOutOpen] = React.useState(false);
  const handleClick = () => setSlideOutOpen(!slideOutOpen);

  React.useEffect(() => {
    const root = document.getElementById("root");
    root.className = currentGame;
  }, [currentGame]);

  return (
    <div id="menu">
      <button className="hamburger" onClick={handleClick}>
        ☰
      </button>
      <div className={classNames("slide-out", { open: slideOutOpen })}></div>
    </div>
  );
};
