import React from "react";

type Score = {
  date: number;
  level: number;
  score: number;
};

interface ScoreContextProps {
  attempted: number;
  completed: number;
  currentScore: number;
  scores: Score[];
}

type ActionTypes =
  | { type: "NEW_GAME" }
  | { type: "UPDATE_SCORE"; score: number }
  | { type: "COMPLETE_GAME" };

const initialState: ScoreContextProps = {
  attempted: 0,
  completed: 0,
  currentScore: 0,
  scores: [],
};

const ScoreContext = React.createContext<ScoreContextProps>(initialState);

function scoreReducer(state: ScoreContextProps, action: ActionTypes) {
  switch (action.type) {
    case "NEW_GAME":
      return {
        ...state,
        attempted: state.attempted + 1,
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        currentScore: action.score,
      };
    case "COMPLETE_GAME":
    default:
      return {
        ...state,
        currentScore: 0,
        completed: state.completed + 1,
      };
  }
}

interface ProviderLayer {
  children: React.ReactElement;
}

