import { Header } from "./header";
import { Body } from "./body";

export const SpellingBee = () => {
  return (
    <div className="splling_bee">
      <Header />
      <Body />
      <footer>
        <button>Delete</button>
        <button>Shuffle</button>
        <button>Enter</button>
      </footer>
    </div>
  );
};
