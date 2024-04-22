import React from "react";
import cn from "classnames";
import { useSpellingBeeContext } from "../context";

interface LetterTileInterface {
  central?: boolean;
  letter: string;
  onClick: (arg: string) => void;
}

const LetterTile = ({ central, letter = "", onClick }: LetterTileInterface) => {
  const handleClick = () => onClick(letter);
  return (
    <div className={cn("hexagon", { central })} onClick={handleClick}>
      {letter}
    </div>
  );
};

export const Body = () => {
  const {
    actions = {},
    centralLetter,
    currentGuess,
    guessedWords,
    letters,
  } = useSpellingBeeContext();
  const addLetter = (letter: string) => {
    if (currentGuess.length > 18) {
      actions?.updateGuess?.("");
      /* Trigger TOO LONG warning */
    } else {
      actions?.updateGuess?.(currentGuess + letter);
    }
  };
  const fontSize = `${2 - Math.max(0, currentGuess.length - 15) / 10}em`;

  React.useEffect(() => {
    actions?.fetchSpellingBeeData?.();
  }, []);

  return (
    <main className="body">
      <div className="row">
        <LetterTile letter={letters[0]} onClick={addLetter} />
        <LetterTile letter={letters[1]} onClick={addLetter} />
      </div>
      <div className="row">
        <LetterTile letter={letters[2]} onClick={addLetter} />
        <LetterTile letter={centralLetter} onClick={addLetter} central />
        <LetterTile letter={letters[3]} onClick={addLetter} />
      </div>
      <div className="row">
        <LetterTile letter={letters[4]} onClick={addLetter} />
        <LetterTile letter={letters[5]} onClick={addLetter} />
      </div>
      <div className="guess" style={{ fontSize }}>
        {currentGuess}
      </div>
      <div className="guess-list">
        <span>Guesses:&nbsp;</span> {guessedWords.join(", ")}
      </div>
    </main>
  );
};
