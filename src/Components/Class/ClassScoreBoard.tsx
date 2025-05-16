import { Component } from "react";
import "./styles/score-board.css";
import { guessCount, nextQuestion } from "../TypeAndGlobalFunctions";



export class ClassScoreBoard extends Component<{
  correctCount: number,
  incorrectCount: number
}> {

  render() {
    const {correctCount, incorrectCount} = this.props;
    

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
}
