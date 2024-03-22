import classnames from "classnames";
import { useSpellingBeeContext } from "../context/useSpellingBee";

const Node = ({ filled }) => (
  <div className={classnames("node", { filled })}></div>
);

const statuses = [
  "Beginner",
  "Good Start",
  "Good",
  "Solid",
  "Great",
  "Moving Up",
  "Amazing",
  "Genius",
];

export const Header = () => {
  const { totalScore, currentScore } = useSpellingBeeContext();
  const place = Math.floor((currentScore / totalScore) * 9);
  const status = statuses[place];
  return (
    <header>
      <div className="nodes">
        <hr className="connector" />
        <Node filled={place > 0} />
        <Node filled={place > 1} />
        <Node filled={place > 2} />
        <Node filled={place > 3} />
        <Node filled={place > 4} />
        <Node filled={place > 5} />
        <Node filled={place > 6} />
        <Node filled={place > 7} />
        <Node filled={place > 8} />
      </div>
      <div className="status">
        {status}: {currentScore} / {totalScore}
      </div>
    </header>
  );
};
