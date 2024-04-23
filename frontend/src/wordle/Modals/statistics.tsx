import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { useGuess } from "../../context/useWordleGuess";
import { useModal } from "../../context/useWordleModal";
import { useStats } from "../../context/useWordleStats";
import { Bar } from "./bar";

const StyledBarchart = styled.div`
  padding: 0 60px;
`;

const StatsBlock = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;

  > div {
    padding-bottom: 12px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Modal = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 23px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  padding: 16px;
  position: relative;
  width: 450px;
`;

const Secret = styled.div`
  color: mediumblue;
  font-size: 1rem;
  text-transform: uppercase;
  &:before {
    content: "Answer: ";
  }
`;

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
      <Modal>
        <FontAwesomeIcon
          className="statistics__closeIcon"
          icon={faClose}
          onClick={exitModal}
        />
        <StatsBlock>
          <Title>statistics</Title>
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
          {secret && <Secret>{secret}</Secret>}
          <Title>gross distribution</Title>
        </StatsBlock>
        <StyledBarchart>
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
        </StyledBarchart>
      </Modal>
    </div>
  );
}
