import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Key from "./key";
import { useGuess } from "../../context/useWordleGuess";

interface KeyRowInterface {
  enterDel?: boolean | undefined;
  letters: string;
}

const KeyRowElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2px;
`;

export default function KeyRow({
  enterDel = false,
  letters = "",
}: KeyRowInterface) {
  const { attemptGuess, removeLetter } = useGuess();

  return (
    <KeyRowElement>
      {enterDel && (
        <Key newClass="enter" onClick={attemptGuess}>
          ENTER
        </Key>
      )}
      {letters.split("").map((letter) => (
        <Key key={letter} letter={letter} />
      ))}
      {enterDel && (
        <Key newClass="delete" onClick={removeLetter}>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </Key>
      )}
    </KeyRowElement>
  );
}
