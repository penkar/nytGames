import React from "react";
import cn from "classnames";
import styled from "styled-components";

import { Guess, CurrentGuess } from "./guess";
import { useGuess } from "../../context/useWordleGuess";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export default function Guesses() {
  const { allowedGuesses, guesses, guess, rumble, secretLength } = useGuess();
  const emptyGuesses = allowedGuesses - guesses.length - 1 > 0;

  return (
    <Wrapper className={cn({ rumble })}>
      {guesses.map((prevGuess, i) => (
        <Guess previous key={i} guess={prevGuess} length={secretLength} />
      ))}
      {guesses.length < allowedGuesses && (
        <CurrentGuess guess={guess} length={secretLength} />
      )}
      {emptyGuesses &&
        new Array(allowedGuesses - guesses.length - 1)
          .fill({})
          .map((x, i) => (
            <Guess key={`empty_${i}`} length={secretLength} guess={x} />
          ))}
    </Wrapper>
  );
}
