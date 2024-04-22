import React from "react";
import { useSpellingBeeContext } from "../context";
import styled from "styled-components";

const FooterSection = styled.footer`
  bottom: 32px;
  display: flex;
  justify-content: center;
  left: 0px;
  position: fixed;
  right: 0px;
`;

const Button = styled.button`
  align-items: center;
  background-color: var(--white);
  border-radius: 2.5em;
  border: 1px solid var(--light-gray);
  color: var(--black);
  display: flex;
  font-size: 1em;
  height: 3em;
  justify-content: center;
  letter-spacing: 0.01em;
  margin: 0 8px;
  min-width: 5.5em;
  padding: 15px 0;
  width: 5.5em;
`;

export const Footer = () => {
  const { actions } = useSpellingBeeContext();

  return (
    <FooterSection>
      <Button onClick={actions?.backspaceGuess}>Delete</Button>
      <Button onClick={actions?.shuffle}>Shuffle</Button>
      <Button onClick={actions?.makeGuess}>Enter</Button>
    </FooterSection>
  );
};
