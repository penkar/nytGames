import React from "react";
import styled from "styled-components";

import { Num } from "./Num";
import { useBoard } from "../../context/useBoard";

const NumPadComponent = styled.div`
  display: grid;
  grid-auto-rows: minmax(auto, 39px);
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  max-width: 360px;
  padding: 12px;
`;

export const Numpad = () => {
  const { actions, board, currentNumber } = useBoard();
  const completedArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  board.forEach(({ fieldValue }) => {
    completedArray[fieldValue] += 1;
  });
  const props = {
    clickEvent: actions?.selectNumber,
    currentNumber,
  };

  return (
    <NumPadComponent>
      <Num complete={completedArray[1] === 9} value={1} {...props} />
      <Num complete={completedArray[2] === 9} value={2} {...props} />
      <Num complete={completedArray[3] === 9} value={3} {...props} />
      <Num complete={completedArray[4] === 9} value={4} {...props} />
      <Num complete={completedArray[5] === 9} value={5} {...props} />
      <Num complete={completedArray[6] === 9} value={6} {...props} />
      <Num complete={completedArray[7] === 9} value={7} {...props} />
      <Num complete={completedArray[8] === 9} value={8} {...props} />
      <Num complete={completedArray[9] === 9} value={9} {...props} />
    </NumPadComponent>
  );
};
