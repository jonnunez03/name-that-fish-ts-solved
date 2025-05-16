import { guessCount, nextQuestion, ScoreType } from "../TypeAndGlobalFunctions";
import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount
}: ScoreType) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {nextQuestion(guessCount(correctCount, incorrectCount)).map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
