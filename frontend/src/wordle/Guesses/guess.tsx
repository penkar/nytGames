import React from "react";
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
    <div className="guess__guess">
      {currentGuess.map((character: GuessInterface, i: number) => (
        <Character key={i} {...character} previous={previous} />
      ))}
    </div>
  );
};

export const CurrentGuess = ({ guess, length }: CurrentGuessInterface) => {
  const letters = [];
  for (let i = 0; i < length; i++) {
    letters.push(<Character character={guess[i]} currentGuess key={i} />);
  }
  return <div className="guess__guess current_guess">{letters}</div>;
};
