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
  centralLetter: "a",
  currentGuess: "",
  error: null,
  guessedWords: [],
  letters: ["a", "b", "c", "d", "e", "f", "g"],
  loaded: false,
  loading: false,
  possibleWords: ["abcd", "cdef", "aaa", "bbb"],
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function boardReducer(state, action) {
  switch (action.type) {
    case "START_FETCH": {
      return {
        ...state,
        centralLetter: "",
        currentGuess: "",
        error: null,
        guessedWords: [],
        letters: [],
        loaded: false,
        loading: true,
        possibleWords: [],
      };
    }
    case "COMPLETE_FETCH": {
      return {
        ...state,
        loaded: true,
        loading: false,
        letters: action.letters,
        centralLetter: action.centralLetter,
        possibleWords: action.possibleWords,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false,
      };
    }
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
    case "SHUFFLE_LETTERS": {
      const newLetters = shuffleArray([...state.letters]);
      return { ...state, letters: newLetters };
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

  const fetchSpellingBeeData = () => {
    dispatch({ type: "START_FETCH" });
    fetch(``)
      .then((res) => res.json())
      .then((data) => {
        try {
          dispatch({
            type: "COMPLETE_FETCH",
            letters: data.letters,
            centralLetter: data.centralLetter,
            possibleWords: data.possibleWords,
          });
        } catch (error) {
          console.error(error);
          dispatch({
            type: "FETCH_ERROR",
            error: "An error was encountered",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: "FETCH_ERROR",
          error: "An error was encountered",
        });
      });
  };
  const shuffle = () => dispatch({ type: "SHUFFLE_LETTERS" });
  const updateGuess = (value) =>
    dispatch({
      type: "UPDATE_GUESS",
      value,
    });
  const clearGuess = () => dispatch({ type: "CLEAR_GUESS" });
  const backspaceGuess = () => dispatch({ type: "BACKSPACE_GUESS" });
  const makeGuess = () => {
    if (
      !guessedWords.includes(currentGuess) &&
      possibleWords.includes(currentGuess)
    ) {
      dispatch({ type: "SUCCESSFUL_GUESS", guess: currentGuess });
    } else {
      clearGuess();
    }
  };

  const actions = {
    backspaceGuess,
    clearGuess,
    fetchSpellingBeeData,
    makeGuess,
    shuffle,
    updateGuess,
  };

  const totalScore = getScore(possibleWords.join(""), centralLetter) || 0;
  const currentScore = getScore(guessedWords.join(""), centralLetter) || 0;

  const exposedState = {
    actions,
    centralLetter,
    currentGuess,
    currentScore,
    guessedWords,
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
