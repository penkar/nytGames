import React from "react";
import EnterDel from "./enterDel";
import Key from "./key";

interface KeyRowInterface {
  enterDel?: boolean | undefined;
  letters: string;
}

export default function KeyRow({
  enterDel = false,
  letters = "",
}: KeyRowInterface) {
  return (
    <div className="key__row">
      {enterDel && <EnterDel enter />}
      {letters.split("").map((letter) => (
        <Key key={letter} letter={letter} />
      ))}
      {enterDel && <EnterDel />}
    </div>
  );
}
