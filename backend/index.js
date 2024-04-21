import express from "express";
import cors from "cors";

import { getRandomWord, checkRandomWord } from "./sampleWords.js";

import {
  binarySearchWordList,
  composePossibleLetters,
  getPossibleWords,
} from "./utilities.js";

const app = express();
const port = 5000;
app.use(cors());

app.get("/spellingbee/:guess", (req, res) => {
  const guess = req.params.guess;
  const correctSpelling = binarySearchWordList(guess);
  console.log({ guess, correctSpelling });

  res.send({ guess, correctSpelling });
});

app.post("/spellingbee/guess", (req, res) => {
  const guess = req.body.guess;
  const correctSpelling = binarySearchWordList(guess);

  res.send({ guess, correctSpelling });
});

app.get("/spellingbee_meta", (req, res) => {
  const possibleLetters = composePossibleLetters();
  const centerLetter = possibleLetters[Math.floor(Math.random() * 7)];
  const words = getPossibleWords(possibleLetters, centerLetter);

  res.send({ words, centerLetter, possibleLetters });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/wordleGuess", (req, res) => {
  res.send({ wordleSecret: getRandomWord() });
});

app.post("/wordleGuess", (req, res) => {
  const guess = req.body.guess;

  res.send({ match: checkRandomWord(guess) });
});
