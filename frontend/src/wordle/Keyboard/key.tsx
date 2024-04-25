import React from "react";
import cn from "classnames";
import styled from "styled-components";

import { useGuess } from "../../context/useWordleGuess";

interface KeyInterface {
  children?: React.ReactNode;
  letter?: string;
  newClass?: string;
  onClick?: () => void;
}

const KeyElement = styled.button`
  background: lightgray;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
  font-family: sans-serif;
  font-weight: 800;
  line-height: 55px;
  margin: 0 4px;
  max-width: 55px;
  text-align: center;
  width: 16px;
  &.delete {
    min-width: 45;
  }
  &.enter {
    64px;
  }
`;

export default function Key({
  children,
  letter = "",
  newClass = "",
  onClick,
}: KeyInterface) {
  const { addLetterToGuess, hintCharacters, matchCharacters, spentCharacters } =
    useGuess();
  const addLetter = () => addLetterToGuess(letter);
  const className = cn(newClass, {
    "key__hint-character": hintCharacters.has(letter),
    "key__match-character": matchCharacters.has(letter),
    "key__spent-character": spentCharacters.has(letter),
  });

  return (
    <KeyElement className={className} onClick={onClick || addLetter}>
      {letter || children}
    </KeyElement>
  );
}
