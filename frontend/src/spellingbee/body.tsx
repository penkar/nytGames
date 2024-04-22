import React from "react";
import styled from "styled-components";
import { useSpellingBeeContext } from "../context";

import { Hexagon } from "./hexagon";

const Main = styled.main`
  bottom: 120px;
  display: flex;
  flex-direction: column-reverse;
  left: 0;
  position: fixed;
  right: 0;
`;

const Row = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  & + & {
    margin-bottom: -20px;
  }
`;

const GuessList = styled.div`
  height: calc(100vh - 420px - 156px - 20px);
  margin: 0px 28px;
  width: calc(100vw - 56px);
`;

const Guess = styled.div`
  font-size: 2em;
  height: 1.25em;
  letter-spacing: 0.5px;
  line-height: 1.25;
  margin: auto;
  padding: 24px 8px;
  text-align: center;
  text-rendering: optimizeLegibility;
  text-transform: uppercase;
`;

export const Body = () => {
  const {
    actions = {},
    centralLetter,
    currentGuess,
    guessedWords,
    letters,
  } = useSpellingBeeContext();
  const addLetter = (letter: string) => {
    if (currentGuess.length > 18) {
      actions?.updateGuess?.("");
      /* Trigger TOO LONG warning */
    } else {
      actions?.updateGuess?.(currentGuess + letter);
    }
  };
  const fontSize = `${2 - Math.max(0, currentGuess.length - 15) / 10}em`;

  React.useEffect(() => {
    actions?.fetchSpellingBeeData?.();
  }, []);

  return (
    <Main>
      <Row>
        <Hexagon letter={letters[0]} onClick={addLetter} />
        <Hexagon letter={letters[1]} onClick={addLetter} />
      </Row>
      <Row>
        <Hexagon letter={letters[2]} onClick={addLetter} />
        <Hexagon letter={centralLetter} onClick={addLetter} central />
        <Hexagon letter={letters[3]} onClick={addLetter} />
      </Row>
      <Row>
        <Hexagon letter={letters[4]} onClick={addLetter} />
        <Hexagon letter={letters[5]} onClick={addLetter} />
      </Row>
      <Guess style={{ fontSize }}>{currentGuess}</Guess>
      <GuessList>
        <span>Guesses:&nbsp;</span> {guessedWords.join(", ")}
      </GuessList>
    </Main>
  );
};
