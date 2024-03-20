import en from "dictionary-en";
import express from "express";
import nspell from "nspell";
const app = express();
const port = 5000;

const spell = nspell(en);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/:guess", (req, res) => {
  const guess = req.params.guess;
  const correctSpelling = spell.correct(guess);

  res.send({ guess, correctSpelling });
});

app.post("/guess", (req, res) => {
  const guess = req.body.guess;
  const correctSpelling = spell.correct(guess);

  res.send({ guess, correctSpelling });
});
