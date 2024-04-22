import React from "react";
import cn from "classnames";
import styled from "styled-components";

const Number = styled.div`
  align-items: center;
  border-radius: 4px;
  display: flex;
  font-size: 2em;
  height: 60px;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: lightgray;
  }
  &.current-num {
    background-color: gray;
    color: white;
  }
  &.numpad-num__complete {
    background: white;
    color: white;
    pointer-events: none;
  }
`;

interface Props {
  currentNumber?: number;
  complete: boolean;
  clickEvent?: (arg1: number) => void;
  value: number;
}
export const Num = ({ complete, clickEvent, currentNumber, value }: Props) => {
  const onClick = () => !complete && clickEvent && clickEvent(value);
  const className = cn("numpad-num", {
    "numpad-num__complete": complete,
    "current-num": value === currentNumber,
  });

  return (
    <Number className={className} onClick={onClick}>
      {value}
    </Number>
  );
};
