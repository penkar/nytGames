import fs from "fs";

const path = "./node_modules/word-list/words.txt";
const wordList = fs.readFileSync(path, "utf8").split("\n");

export const binarySearchWordList = (word) => {
  let start = 0;
  let end = wordList.length;
  let middle = Math.floor((start + end) / 2);
  let current = null;

  while (
    start !== end &&
    wordList[middle] !== word &&
    current !== wordList[middle]
  ) {
    current = wordList[middle];
    if (checkPosition(word, middle)) {
      start = middle;
    } else {
      end = middle;
    }
    middle = Math.floor((start + end) / 2);
  }
  return wordList[middle] === word;
};

const checkPosition = (word, index) => {
  // Return true if the word is to the left of the index, and false if it is to the right.
  const current = wordList[index];
  if (current.match(new RegExp(`^${word}`))) {
    return false;
  }
  if (current < word) {
    return true;
  }
  return false;
};
