import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { ScoreType } from "../TypeAndGlobalFunctions";


export class ClassApp extends Component {
  state: ScoreType = {
    correctCount: 0,
    incorrectCount: 0
  }

  updateScore = (isCorrect: boolean) => {
    const { correctCount, incorrectCount } = this.state
    this.setState({
      correctCount: isCorrect ? correctCount + 1 : correctCount,
      incorrectCount: !isCorrect ? incorrectCount + 1 : incorrectCount
    })
  }

  isDone = (): boolean => {
    return this.state.correctCount + this.state.incorrectCount === 4 
      ? true : false; 
  }

  render() {
    const { correctCount, incorrectCount } = this.state
    const isDone = this.isDone()
    return (
      <>
        <>
          { !isDone 
          && <ClassScoreBoard
            correctCount={correctCount} 
            incorrectCount={incorrectCount} 
          /> }
          { !isDone 
          && <ClassGameBoard 
              correctCount={correctCount} 
              incorrectCount={incorrectCount}
              updateScore={this.updateScore}
          /> }
        </>
        { isDone 
          && <ClassFinalScore
            correctCount={correctCount} 
            incorrectCount={incorrectCount} 
        /> }
      </>
    );
  }
}
