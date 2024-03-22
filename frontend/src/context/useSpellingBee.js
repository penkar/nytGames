import React from "react";
import { serverURL } from "../utilities";

const SpellingBeeContextProvider = React.createContext({
  actions: {},
  centralLetter: "",
  letters: [],
  possibleWords: [],
  guessedWords: [],
  currentScore: 0,
  totalScore: 100,
});

const initialState = {
  actions: {},
  loading: false,
  loaded: false,
  totalScore: 100,
  currentScore: 0,
  letters: ["a", "b", "c", "d", "e", "f", "g"],
  possibleWords: [],
  centralLetter: "a",
};

function boardReducer(state, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

function SpellingBeeContext({ children }) {
  const [
    {
      loading,
      loaded,
      totalScore,
      currentScore,
      letters,
      possibleWords,
      centralLetter,
    },
    dispatch,
  ] = React.useReducer(boardReducer, initialState);

  const actions = {};

  const exposedState = {
    actions,
    loading,
    loaded,
    totalScore,
    currentScore,
    letters: letters.filter((letter) => letter !== centralLetter),
    possibleWords,
    centralLetter,
  };

  return (
    <SpellingBeeContextProvider.Provider value={exposedState}>
      {children}
    </SpellingBeeContextProvider.Provider>
  );
}

const useSpellingBeeContext = () => {
  const exposedState = React.useContext(SpellingBeeContextProvider);
  return exposedState;
};

export { SpellingBeeContext, useSpellingBeeContext };
