import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  align-items: center;
  background: var(--light-gray);
  display: flex;
  font-size: 24px;
  height: 80px;
  justify-content: center;
  width: 80px;
  transition: 0.7s;
  margin: 2px;
  text-transform: uppercase;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
`;

interface HexagonInterface {
  central?: boolean;
  letter: string;
  onClick: (arg: string) => void;
}

export const Hexagon = ({
  central = false,
  letter = "",
  onClick,
}: HexagonInterface) => {
  const handleClick = () => onClick(letter);
  const styles = {
    backgroundColor: "var(--gold)",
  };
  return (
    <Tile style={central ? styles : {}} onClick={handleClick}>
      {letter}
    </Tile>
  );
};
