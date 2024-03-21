import React from "react";
// frontend/utilities/serverURL.js
// frontend/src/context/useSpellingBee.js
import { serverURL } from "../utilities";

const SpellingBeeContextProvider = React.createContext({
  actions: {},
  centralLetter: null,
  letters: [],
  possibleWords: [],
  guessedWords: [],
  currentScore: 0,
  totalScore: 0,
});

const initialState = {
  actions: {},
  loading: false,
  loaded: false,
  totalScore: 0,
  currentScore: 0,
  letters: [],
  possibleWords: [],
  centralLetter: null,
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
    letters,
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
