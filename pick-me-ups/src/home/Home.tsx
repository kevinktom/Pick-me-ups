import React from "react";
import './home.css';
import Quote from "../quote/Quote";

class Home extends React.Component<{}, {answers: string[], currentAnswer: string}>{
  constructor(props: any){
    super(props);
    this.state = {
      answers: [],
      currentAnswer: ''
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="container">
          <h1 id='header'>Pick me ups</h1>

          {this.state.answers.length !== this.questions.length &&
            <div id='cardBody'>
              <h2>{this.questions[this.state.answers.length]}</h2>
              <textarea onChange={this.onTextAreaChange} value={this.state.currentAnswer} name="" id="textareaBox" onKeyDown={this.onEnterKeyDown}></textarea>
              <div className="button-actions">
                <button onClick={this.onAnswerEnter}>Next Question</button>
                {this.state.answers.length > 0 && <button onClick={this.returnPreviousQuestion}>Back</button>}
                <button onClick={this.generateRandomQuote}>Enlighten Me</button>
              </div>
            </div>
          }
          {this.state.answers.length === this.questions.length && <Quote resetAnswers={this.resetAnswers} answers={this.state.answers}></Quote>}
      
        </div>
      </div>
    );
  };

  public questions = [
    "How are you feeling right now?",
    "What do you think is causing you to feel this way?",
    "How did you respond?",
    "Is there anything you would like to get off your mind?"
  ]

  onEnterKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      this.onAnswerEnter()
    }
  }

  onTextAreaChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState({currentAnswer: event.currentTarget.value})
  }

  onAnswerEnter = () => {
    this.setState({answers: [...this.state.answers, this.state.currentAnswer], currentAnswer: ''});
  }

  resetAnswers = () => {
    this.setState({answers: [], currentAnswer: ''});
  }

  returnPreviousQuestion = () => {
    const lastAnswer = this.state.answers.slice(-1)[0]
    this.setState({answers: this.state.answers.slice(0,-1), currentAnswer: lastAnswer})
  }

  generateRandomQuote = () => {
    const blankAnswers = [];
    for(let i=0; i < this.questions.length; i++){
      blankAnswers.push('');
    }
    this.setState({answers: blankAnswers});
  }

}

export default Home;
