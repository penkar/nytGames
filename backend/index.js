import express from "express";
import { binarySearchWordList } from "./binarySearch.js";

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/g/:guess", (req, res) => {
  const guess = req.params.guess;
  const correctSpelling = binarySearchWordList(guess);
  console.log({ guess, correctSpelling });

  res.send({ guess, correctSpelling });
});

app.post("/guess", (req, res) => {
  const guess = req.body.guess;
  const correctSpelling = binarySearchWordList(guess);

  res.send({ guess, correctSpelling });
});
