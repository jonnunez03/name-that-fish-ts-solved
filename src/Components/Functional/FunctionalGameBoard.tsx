import "./styles/game-board.css";
import { BoardProps, firstName, guessCount, nextFish, nextQuestion, TFishAndCount } from "../TypeAndGlobalFunctions";
import { useState } from "react";

export function FunctionalGameBoard({
  correctCount,
  incorrectCount,
  updateScore
}: BoardProps) {
  const [fish, setFish] = useState<TFishAndCount>({
    name: firstName,
    url: nextFish(firstName),
    guess: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFish({ name: fish.name, url: fish.url, guess: e.target.value.toLowerCase() });
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const isCorrect = fish.guess === fish.name;
    e.preventDefault();
    updateScore(isCorrect);
    const totalSoFar = guessCount(correctCount, incorrectCount) + 1;
    const nextName = nextQuestion(totalSoFar)[0];
    const nextUrl = nextFish(nextName);
    setFish({
      name: nextName,
      url: nextUrl,
      guess: ''
    })
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fish.url} alt={fish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input 
          type="text" 
          name="fish-guess" 
          value={fish.guess}
          onChange={handleChange}
        />
        <input type="submit"/>
      </form>
    </div>
  );
}
