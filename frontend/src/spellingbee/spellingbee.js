import classnames from "classnames";
import { useSpellingBeeContext } from "../context/useSpellingBee";

const Node = ({ filled }) => (
  <div className={classnames("node", { filled })}></div>
);

const Chain = ({ totalScore, currentScore }) => {
  const place = Math.floor((currentScore / totalScore) * 9);
  return (
    <header className="nodes">
      <hr className="connector"></hr>
      <Node filled={place > 0 || true} />
      <Node filled={place > 1 || true} />
      <Node filled={place > 2} />
      <Node filled={place > 3} />
      <Node filled={place > 4} />
      <Node filled={place > 5} />
      <Node filled={place > 6} />
      <Node filled={place > 7} />
      <Node filled={place > 8} />
    </header>
  );
};

export const SpellingBee = () => {
  const { actions, totalScore, currentScore } = useSpellingBeeContext();
  return (
    <div className="splling_bee">
      <Chain totalScore={totalScore} currentScore={currentScore} />
      <section></section>
      <footer>
        <button>Delete</button>
        <button>Shuffle</button>
        <button>Enter</button>
      </footer>
    </div>
  );
};
