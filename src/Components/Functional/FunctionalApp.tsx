import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { ScoreType } from "../TypeAndGlobalFunctions";

export const FunctionalApp = () => {
  const [ score, setScore ]= useState<ScoreType>({
    correctCount: 0,
    incorrectCount: 0
  }); 

  const updateScore = (isCorrect: boolean) => {
    setScore({
      correctCount: isCorrect ? score.correctCount + 1 : score.correctCount,
      incorrectCount: !isCorrect ? score.incorrectCount + 1 : score.incorrectCount
    })
  }

  const isDone = (): boolean => {
    return score.correctCount + score.incorrectCount === 4 
      ? true : false; 
  }
  const { correctCount, incorrectCount } = score
      return (
        <>
          <>
            { !isDone() 
            && <FunctionalScoreBoard
              correctCount={correctCount} 
              incorrectCount={incorrectCount} 
            /> }
            { !isDone() 
            && <FunctionalGameBoard 
                correctCount={correctCount} 
                incorrectCount={incorrectCount}
                updateScore={updateScore}
            /> }
          </>
          { isDone() 
            && <FunctionalFinalScore
              correctCount={correctCount} 
              incorrectCount={incorrectCount} 
          /> }
        </>
      );
}
