import React from "react";
import styled from "styled-components";

import { Cell } from "./Cell";
import { useBoard } from "../../context/useBoard";

const BoardElement = styled.div`
  display: grid;
  grid-auto-rows: minmax(auto, 39px);
  grid-template-columns: repeat(9, 1fr);
  margin: 0;
  max-width: 360px;
  padding: 12px;
`;

export const Board = () => {
  const { actions, board, currentCell, currentNumber, currentState, editMode } =
    useBoard();
  const props = {
    currentNumber,
    editMode,
    selectCell: actions?.selectCell,
    selectNumberCell: actions?.selectNumberCell,
  };

  return (
    <BoardElement>
      {board.map(({ fieldValue, guess, guessSet, hidden }, index) => (
        <Cell
          currentCell={currentCell === index}
          currentState={currentState}
          fieldValue={fieldValue}
          guess={guess}
          guessSet={guessSet}
          hidden={hidden}
          index={index}
          key={`${index}-${fieldValue}`}
          {...props}
        />
      ))}
    </BoardElement>
  );
};
