import React from "react";
import { serverURL } from "../utilities";

const SpellingBeeContextProvider = React.createContext({
  actions: {},
  centralLetter: "",
  currentGuess: "",
  letters: [],
  guessedWords: [],
});

const initialState = {
  actions: {},
  centralLetter: "a",
  currentGuess: "",
  currentScore: 0,
  guessedWords: [],
  letters: ["a", "b", "c", "d", "e", "f", "g"],
  loaded: false,
  loading: false,
  possibleWords: [],
  totalScore: 100,
};

function boardReducer(state, action) {
  switch (action.type) {
    case "BACKSPACE_GUESS": {
      let newGuess = state.currentGuess.substr(
        0,
        state.currentGuess.length - 1
      );
      return { ...state, currentGuess: newGuess };
    }
    case "CLEAR_GUESS": {
      return { ...state, currentGuess: "" };
    }
    case "UPDATE_GUESS": {
      return { ...state, currentGuess: action.value };
    }
    case "SUCCESSFUL_GUESS": {
      const { guess } = action;
      const guessedWords = [...state.guessedWords, guess];
      return { ...state, guessedWords, currentGuess: "" };
    }
    default: {
      return state;
    }
  }
}

function getScore(longString, keyLetter) {
  let score = 0;
  for (let i = 0; i < longString.length; i++) {
    if (longString[i] === keyLetter) {
      score += 2;
    } else {
      score += 1;
    }
  }
  return score;
}

function SpellingBeeContext({ children }) {
  const [
    {
      centralLetter,
      currentGuess,
      guessedWords,
      letters,
      loaded,
      loading,
      possibleWords,
    },
    dispatch,
  ] = React.useReducer(boardReducer, initialState);

  const updateGuess = (value) =>
    dispatch({
      type: "UPDATE_GUESS",
      value,
    });
  const clearGuess = () => dispatch({ type: "CLEAR_GUESS" });
  const backspaceGuess = () => dispatch({ type: "BACKSPACE_GUESS" });
  const makeGuess = () => {
    if (
      !guessedWords.contains(currentGuess) &&
      possibleWords.includes(currentGuess)
    ) {
      dispatch({ type: "SUCCESSFUL_GUESS", guess: currentGuess });
    } else {
      clearGuess();
    }
  };

  const actions = { backspaceGuess, clearGuess, updateGuess, makeGuess };

  const totalScore = getScore(guessedWords.join(""), centralLetter) || 0;
  const currentScore = getScore(possibleWords.join(""), centralLetter) || 0;

  const exposedState = {
    actions,
    centralLetter,
    currentGuess,
    currentScore,
    letters: letters.filter((letter) => letter !== centralLetter),
    loaded,
    loading,
    totalScore,
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
