import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { useGuess } from "../../context/useWordleGuess";
import { useModal } from "../../context/useWordleModal";
import { useStats } from "../../context/useWordleStats";

interface BarInterface {
  completion: number;
  count: number;
  num: number;
  total: number;
}

const Bar = ({ completion, count, num, total }: BarInterface) => {
  const percent = Math.max(10, (count * 100) / total);
  const color = num === completion ? "#6aaa64" : "gray";
  const styleAttr = {
    background: `linear-gradient(to right, ${color} ${percent}%, transparent ${percent}%)`,
  };

  return (
    <div className="statistics__bar">
      <div className="statistics__barNum">{num}</div>
      <div className="statistics__barCount" style={styleAttr}>
        {count}
      </div>
    </div>
  );
};

export default function Statistics() {
  const { completion, secret } = useGuess();
  const { currentModal, exitModal, setCurrentModal } = useModal();
  const { currentStats, updateStats } = useStats();

  const total = currentStats.total || 1;
  React.useEffect(() => {
    if (completion) {
      updateStats(completion);
      setCurrentModal(3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completion]);

  return (
    <div
      className={
        currentModal === 3 ? "statistics__open" : "statistics__backdrop"
      }
      onClick={exitModal}
    >
      <div className="statistics__modal">
        <FontAwesomeIcon
          className="statistics__closeIcon"
          icon={faClose}
          onClick={exitModal}
        />
        <div className="statistics__statsBlock">
          <div className="statistics__title">statistics</div>
          <div className="statistics__stats">
            <div className="statistics__stat">
              <div>{currentStats.total}</div>
              <div>played</div>
            </div>
            <div className="statistics__stat">
              <div>{Math.floor((100 * currentStats.wins) / total)}%</div>
              <div>win %</div>
            </div>
            <div className="statistics__stat">
              <div>{currentStats.current_streak}</div>
              <div>current streak</div>
            </div>
            <div className="statistics__stat">
              <div>{currentStats.longest_streak}</div>
              <div>max strek</div>
            </div>
          </div>
          {secret && <div className="statistics__secret">{secret}</div>}
          <div className="statistics__title">gross distribution</div>
        </div>
        <div className="statistics__barChart">
          <Bar
            completion={completion}
            count={currentStats.guessCount[1]}
            num={1}
            total={total}
          />
          <Bar
            completion={completion}
            count={currentStats.guessCount[2]}
            num={2}
            total={total}
          />
          <Bar
            completion={completion}
            count={currentStats.guessCount[3]}
            num={3}
            total={total}
          />
          <Bar
            completion={completion}
            count={currentStats.guessCount[4]}
            num={4}
            total={total}
          />
          <Bar
            completion={completion}
            count={currentStats.guessCount[5]}
            num={5}
            total={total}
          />
          <Bar
            completion={completion}
            count={currentStats.guessCount[6]}
            num={6}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
