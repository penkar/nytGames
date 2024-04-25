import React from "react";
import styled from "styled-components";

import KeyRow from "./keyRow";
import { useGuess } from "../../context/useWordleGuess";

const KeyboardElement = styled.div`
  padding: 2px;
  text-transform: uppercase;
`;

export default function Keyboard() {
  const { addLetterToGuess, completion, removeLetter, attemptGuess } =
    useGuess();

  const keyDownEvent = React.useCallback(
    (event: KeyboardEvent): void => {
      if (completion) return;
      const { key, keyCode } = event;
      if (keyCode > 64 && keyCode < 91) {
        /* A-Z */
        addLetterToGuess(key);
      } else if (keyCode === 8) {
        /* Backspace */
        removeLetter();
      } else if (keyCode === 13) {
        attemptGuess();
      }
    },
    [addLetterToGuess, attemptGuess, completion, removeLetter]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", keyDownEvent);
    return () => document.removeEventListener("keydown", keyDownEvent);
  }, [keyDownEvent]);

  return (
    <KeyboardElement>
      <KeyRow letters="qwertyuiop" />
      <KeyRow letters="asdfghjkl" />
      <KeyRow letters="zxcvbnm" enterDel />
    </KeyboardElement>
  );
}
