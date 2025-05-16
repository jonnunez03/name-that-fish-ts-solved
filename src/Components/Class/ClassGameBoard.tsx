import React, { Component } from "react";
import "./styles/game-board.css";
import { firstName, guessCount, nextFish, nextQuestion, TFishAndCount } from "../TypeAndGlobalFunctions";

export class ClassGameBoard extends Component<{
  correctCount: number,
  incorrectCount: number,
  updateScore: (isCorrect: boolean) => void
}> {
  
  state: TFishAndCount = {
    name: firstName,
    url: nextFish(firstName),
    guess: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ guess: e.target.value.toLowerCase() })
  }

  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { correctCount, incorrectCount, updateScore } = this.props;
    const isCorrect = this.state.guess === this.state.name;
    e.preventDefault();
    updateScore(isCorrect);
    const totalSoFar = guessCount(correctCount, incorrectCount) + 1;
    const nextName = nextQuestion(totalSoFar)[0];
    const nextUrl = nextFish(nextName);
    this.setState({
      name: nextName,
      url: nextUrl,
      guess: ''
    })
  }
  
  render() {
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={this.state.url} alt={this.state.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input 
            type="text" 
            name="fish-guess" 
            value={this.state.guess}
            onChange={this.handleChange}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
