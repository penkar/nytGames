import React from "react";
import cn from "classnames";

interface CharacterInterface {
  character: string;
  currentGuess?: boolean;
  hint?: boolean;
  match?: boolean;
  previous?: boolean;
}

const Character = ({
  character = "",
  currentGuess = false,
  hint = false,
  match = false,
  previous = false,
}: CharacterInterface) => {
  const charStyles = cn("guess__character", {
    matchCharacter: match,
    hintCharacter: hint,
    previousCharacter: previous,
    currentGuess: currentGuess,
    emptyCharacter: !currentGuess && !character,
  });

  return <div className={charStyles}>{character}</div>;
};

export default Character;
