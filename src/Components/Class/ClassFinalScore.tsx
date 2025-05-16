import { Component } from "react";

export class ClassFinalScore extends Component<{
  correctCount: number,
  incorrectCount: number
}> {
  render() {
    const { correctCount, incorrectCount} = this.props;
    const totalCount = correctCount + incorrectCount;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
