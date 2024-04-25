import React from "react";
import cn from "classnames";
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

const Backdrpo = styled.div`
  align-content: center;
  align-items: center;
  background-color: hsl(0deg 0% 100% / 66%);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const Stats = styled.div`
  z-index: -1;
`;

const Stat = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  &:first-child {
    font-size: 36px;
    align-items: center;
    display: flex;
    font-weight: 400;
    justify-content: center;
    text-align: center;
  }

  &:last-child {
    align-content: center;
    align-items: center;
    display: flex;
    font-size: 12px;
    max-width: 60px;
    text-align: center;
    text-transform: capitalize;
  }

  & + & {
    padding-left: 18px;
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
    <Backdrpo
      className={cn({
        statistics__backdrop: currentModal !== 3,
      })}
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
          <Stats>
            <Stat>
              <div>{currentStats.total}</div>
              <div>played</div>
            </Stat>
            <Stat>
              <div>{Math.floor((100 * currentStats.wins) / total)}%</div>
              <div>win %</div>
            </Stat>
            <Stat>
              <div>{currentStats.current_streak}</div>
              <div>current streak</div>
            </Stat>
            <Stat>
              <div>{currentStats.longest_streak}</div>
              <div>max strek</div>
            </Stat>
          </Stats>
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
    </Backdrpo>
  );
}
