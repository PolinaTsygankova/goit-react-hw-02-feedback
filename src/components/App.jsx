import React from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonChange = e => {
    const buttonName = e.currentTarget.id;
    this.setState(prevState => {
      return { [buttonName]: prevState[buttonName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(([this.state.good] * 100) / [this.countTotalFeedback()]);
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          items={this.state}
          onLeaveFeedback={this.handleButtonChange}
        ></FeedbackOptions>
        {/* <button id="good" onClick={this.handleButtonChange}>
          Good
        </button>
        <button id="neutral" onClick={this.handleButtonChange}>
          Neutral
        </button>
        <button id="bad" onClick={this.handleButtonChange}>
          Bad
        </button> */}

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
        {/* <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p> */}
      </div>
    );
  }
}
