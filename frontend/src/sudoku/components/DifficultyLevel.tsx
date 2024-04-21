import React from "react";
import cn from "classnames";
import { useBoard } from "../../context/useBoard";

interface MenuButtonType {
  difficultyLevel: number;
  level: string;
}
const MenuButton = ({ difficultyLevel, level }: MenuButtonType) => {
  const { actions, difficulty } = useBoard();

  return (
    <li
      className={cn("menu-option", {
        "menu-option__selected": difficultyLevel === difficulty,
      })}
      onClick={() => actions?.setDifficulty(difficultyLevel)}
    >
      Difficulty {level}
    </li>
  );
};

export const DifficultyLevel = () => (
  <ol>
    <MenuButton difficultyLevel={0.6} level="1" />
    <MenuButton difficultyLevel={0.5} level="2" />
    <MenuButton difficultyLevel={0.4} level="3" />
    <MenuButton difficultyLevel={0.3} level="4" />
    <MenuButton difficultyLevel={0.2} level="5" />
    <MenuButton difficultyLevel={0.1} level="6" />
  </ol>
);
