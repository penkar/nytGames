import React from "react";
import styled from "styled-components";

import Character from "./character";

interface CurrentGuessInterface {
  guess: string;
  length: number;
}

interface GuessInterface {
  character: string;
  hint: boolean;
  match: boolean;
}

interface GuessesInterface {
  guess: GuessInterface[];
  length: number;
  previous?: boolean;
}

const GuessElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Guess = ({
  length,
  guess = [],
  previous = false,
}: GuessesInterface) => {
  const currentGuess = new Array(length);
  for (let i = 0; i < length; i++) {
    currentGuess[i] = guess[i] || {};
  }
  return (
    <GuessElement>
      {currentGuess.map((character: GuessInterface, i: number) => (
        <Character key={i} {...character} previous={previous} />
      ))}
    </GuessElement>
  );
};

export const CurrentGuess = ({ guess, length }: CurrentGuessInterface) => {
  const letters = [];
  for (let i = 0; i < length; i++) {
    letters.push(<Character character={guess[i]} currentGuess key={i} />);
  }
  return <GuessElement className="current_guess">{letters}</GuessElement>;
};
