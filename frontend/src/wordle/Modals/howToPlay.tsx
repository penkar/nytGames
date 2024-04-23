import React from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { Guess } from "../Guesses/guess";

import { useModal } from "../../context/useWordleModal";

const Wrapper = styled.div`
  max-width: 400px;
`;

const Title = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 6px;
  text-transform: uppercase;
`;

const Line = styled.div`
  padding: 4px 0;
  > div {
    justify-content: start;
  }
`;

const HowToPlay = React.memo(() => {
  const [loading, setLoading] = React.useState(true);
  const { currentModal, exitModal } = useModal();

  const guess1 = [
    { match: true, hint: false, character: "t" },
    { match: false, hint: false, character: "o" },
    { match: false, hint: false, character: "p" },
    { match: false, hint: false, character: "s" },
  ];

  const guess2 = [
    { match: false, hint: false, character: "w" },
    { match: false, hint: true, character: "o" },
    { match: false, hint: false, character: "r" },
    { match: false, hint: false, character: "d" },
  ];

  const guess3 = [
    { match: false, hint: false, character: "w" },
    { match: false, hint: false, character: "i" },
    { match: false, hint: false, character: "n" },
    { match: false, hint: false, character: "s" },
  ];

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div
      className={cn({
        how_to_play__open: currentModal === 2,
        how_to_play__modal: currentModal !== 2,
        how_to_play__loading: loading,
      })}
    >
      <Wrapper>
        <Title>
          <span>how to play</span>
          <FontAwesomeIcon
            className="how_to_play__closeIcon"
            icon={faClose}
            onClick={exitModal}
          />
        </Title>
        <div>
          <Line>
            Guess the <span className="how_to_play__strong">GenOrdle</span> in
            six tries.
          </Line>
          <Line>
            Each guess must be a 5-8 character set of words. Hit the enter
            button to submit.
          </Line>
          <Line>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </Line>
          <hr />
          <Line className="how_to_play__strongLine">Examples</Line>
          <Line>
            The letter <span className="how_to_play__strong">T</span> is in the
            word and in the correct spot.
          </Line>
          <Line>
            <Guess length={4} previous guess={guess1} />
          </Line>
          <Line>
            The letter <span className="how_to_play__strong">O</span> is in the
            word but in the wrong spot.
          </Line>
          <Line>
            <Guess length={4} previous guess={guess2} />
          </Line>
          <Line>
            The letter <span className="how_to_play__strong">S</span> is not in
            the word in any spot.
          </Line>
          <Line>
            <Guess length={4} previous guess={guess3} />
          </Line>
          <hr />
        </div>
      </Wrapper>
    </div>
  );
});

export default HowToPlay;
