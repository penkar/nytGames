import React from "react";
import styled from "styled-components";

interface BarInterface {
  completion: number;
  count: number;
  num: number;
  total: number;
}

const BarCount = styled.div`
  color: white;
  flex-grow: 1;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-top: 2px;
`;

const BarNum = styled.div`
  padding-bottom: 2px;
  padding-top: 2px;
  width: 10px;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & + & {
    padding-top: 8px;
  }
`;

export const Bar = ({ completion, count, num, total }: BarInterface) => {
  const percent = Math.max(10, (count * 100) / total);
  const color = num === completion ? "#6aaa64" : "gray";
  const styleAttr = {
    background: `linear-gradient(to right, ${color} ${percent}%, transparent ${percent}%)`,
  };

  return (
    <BarWrapper>
      <BarNum>{num}</BarNum>
      <BarCount style={styleAttr}>{count}</BarCount>
    </BarWrapper>
  );
};
