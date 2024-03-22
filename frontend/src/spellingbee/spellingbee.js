import classNames from "classnames";
import { Chain } from "./chain";
import { useSpellingBeeContext } from "../context/useSpellingBee";

const LetterTile = ({ central, letter = "", onClick }) => (
  <div className={classNames("hexagon", { central })} onClick={onClick}>
    {letter}
  </div>
);

export const SpellingBee = () => {
  const { actions, totalScore, currentScore, letters, centralLetter } =
    useSpellingBeeContext();
  console.log({ letters, centralLetter });
  const addLetter = () => {};

  return (
    <div className="splling_bee">
      <Chain totalScore={totalScore} currentScore={currentScore} />
      <section>
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
      </section>
      <footer>
        <button>Delete</button>
        <button>Shuffle</button>
        <button>Enter</button>
      </footer>
    </div>
  );
};
