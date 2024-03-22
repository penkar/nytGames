import classnames from "classnames";

const Node = ({ filled }) => (
  <div className={classnames("node", { filled })}></div>
);

const statuses = [
  "Genius",
  "Amazing",
  "Great",
  "Solid",
  "Good",
  "Moving Up",
  "Good Start",
  "Beginner",
];

export const Chain = ({ totalScore, currentScore }) => {
  const place = Math.floor((currentScore / totalScore) * 9);
  const status = statuses[place];
  return (
    <header>
      <div className="nodes">
        <hr className="connector" />
        <Node filled={place > 0 || true} />
        <Node filled={place > 1 || true} />
        <Node filled={place > 2} />
        <Node filled={place > 3} />
        <Node filled={place > 4} />
        <Node filled={place > 5} />
        <Node filled={place > 6} />
        <Node filled={place > 7} />
        <Node filled={place > 8} />
      </div>
      <div className="status">{status}</div>
    </header>
  );
};
