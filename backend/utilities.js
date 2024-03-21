import fs from "fs";

const path = "./node_modules/word-list/words.txt";
const dictionaryWordList = fs.readFileSync(path, "utf8").split("\n");

export const binarySearchWordList = (word) => {
  let start = 0;
  let end = dictionaryWordList.length;
  let middle = Math.floor((start + end) / 2);
  let current = null;

  // const possibleLetters = composePossibleLetters();
  // const centerLetter = possibleLetters[Math.floor(Math.random() * 7)];
  // const words = getPossibleWords(possibleLetters, centerLetter);

  while (
    start !== end &&
    dictionaryWordList[middle] !== word &&
    current !== dictionaryWordList[middle]
  ) {
    current = dictionaryWordList[middle];
    if (checkPosition(word, middle)) {
      start = middle;
    } else {
      end = middle;
    }
    middle = Math.floor((start + end) / 2);
  }

  return dictionaryWordList[middle] === word;
};

const checkPosition = (word, index) => {
  // Return true if the word is to the left of the index, and false if it is to the right.
  const current = dictionaryWordList[index];
  if (current.match(new RegExp(`^${word}`))) {
    return false;
  }
  if (current < word) {
    return true;
  }
  return false;
};

const vowels = ["a", "e", "i", "o", "u"];
const constanants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const composePossibleLetters = () => {
  const possibleConstanants = new Set();
  const possibleVowels = new Set();
  while (possibleConstanants.size !== 5) {
    const constanant = constanants[Math.floor(Math.random() * 21)];
    possibleConstanants.add(constanant);
  }
  while (possibleVowels.size !== 2) {
    const vowel = vowels[Math.floor(Math.random() * 5)];
    possibleVowels.add(vowel);
  }
  return [...possibleConstanants, ...possibleVowels];
};

export const getPossibleWords = (possibleLetters, centerLetter) => {
  const letters = new RegExp(`^[${possibleLetters.join("")}]+$`);
  const letter = new RegExp(`[${centerLetter}]`);
  return dictionaryWordList.filter(
    (word) =>
      word.length > 3 &&
      Boolean(word.match(letters) && Boolean(word.match(letter)))
  );
};
