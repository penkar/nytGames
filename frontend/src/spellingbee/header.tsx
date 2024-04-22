import React from "react";
import cn from "classnames";
import styled from "styled-components";

import { useSpellingBeeContext } from "../context";

const Status = styled.div`
  text-align: center;
`;
const Connector = styled.hr`
  border: 0px;
  border-bottom: solid 1px var(--light-gray);
  border-style: solid;
  height: 0px;
  margin: 0px;
  position: absolute;
  width: 264px;
  z-index: -1;
`;

const NodesElement = styled.div`
  align-items: center;
  border-radius: 4px;
  border: solid 1px var(--light-gray);
  display: flex;
  flex-direction: row;
  height: 44px;
  justify-content: center;
  margin: 16px auto;
  width: 300px;
`;

const NodeElement = styled.div`
  padding-left: 8px;
  padding-right: 8px;

  &:after {
    background-color: var(--light-gray);
    border-radius: 50%;
    content: "";
    display: block;
    height: 16px;
    left: -4.5px;
    top: -4.5px;
    transition: background-color 200ms 100ms ease;
    width: 16px;
  }
  &.filled:after {
    background-color: var(--gold);
  }
`;

const HeaderElement = styled.header`
  position: fixed;
  top: 60px;
  left: 0px;
  right: 0px;
`;

const Node = ({ filled }: { filled?: boolean }) => (
  <NodeElement className={cn("node", { filled })}></NodeElement>
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
  "Master",
  "Perfect",
];

export const Header = () => {
  const { totalScore, currentScore } = useSpellingBeeContext();
  const place = Math.ceil((currentScore / totalScore) * 8) || 0;
  const status = statuses[place];

  return (
    <HeaderElement>
      <NodesElement>
        <Connector />
        <Node filled={place > 0} />
        <Node filled={place > 1} />
        <Node filled={place > 2} />
        <Node filled={place > 3} />
        <Node filled={place > 4} />
        <Node filled={place > 5} />
        <Node filled={place > 6} />
        <Node filled={place > 7} />
        <Node filled={totalScore > 0 && totalScore === currentScore} />
      </NodesElement>
      <Status>
        {status}: {currentScore} / {totalScore}
      </Status>
    </HeaderElement>
  );
};
