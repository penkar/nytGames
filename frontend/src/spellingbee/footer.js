import { useSpellingBeeContext } from "../context/useSpellingBee";

export const Footer = () => {
  const { actions } = useSpellingBeeContext();

  return (
    <footer>
      <button onClick={actions.backspaceGuess}>Delete</button>
      <button onClick={actions.shuffle}>Shuffle</button>
      <button onClick={actions.makeGuess}>Enter</button>
    </footer>
  );
};
