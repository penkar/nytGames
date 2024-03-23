import cn from "classnames";
import { useSpellingBeeContext } from "../context/useSpellingBee";

const Node = ({ filled }) => <div className={cn("node", { filled })}></div>;

const statuses = [
  "Beginner",
  "Good Start",
  "Good",
  "Solid",
  "Great",
  "Moving Up",
  "Amazing",
  "Genius",
  "Master",
  "Perfect",
];

export const Header = () => {
  const { totalScore, currentScore } = useSpellingBeeContext();
  const place = Math.ceil((currentScore / totalScore) * 8) || 0;
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
        <Node filled={totalScore > 0 && totalScore === currentScore} />
      </div>
      <div className="status">
        {status}: {currentScore} / {totalScore}
      </div>
    </header>
  );
};
