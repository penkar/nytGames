import React from "react";
import styled from "styled-components";
import { useBoard } from "../../context/useBoard";

const PanelHeader = styled.div`
  font-size: 1em;
  padding-top: 6px;
  position: relative;
`;

const Icon = styled.div`
  left: 6px;
  top: 2px;
  position: absolute;
  zoom: 2;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

export const Header = () => {
  const { actions } = useBoard();
  const clickMenu = () => actions?.toggleMenu(true);

  const standAlone = window.matchMedia("(display-mode: standalone)").matches;
  React.useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    if (standAlone) {
      body.className = "stand-alone";
    } else {
      body.className = "web-app";
    }
  }, [standAlone]);

  return (
    <PanelHeader>
      <Icon onClick={clickMenu}>&#9776;</Icon>
      <Title>Sudoku</Title>
    </PanelHeader>
  );
};
