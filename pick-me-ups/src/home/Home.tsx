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
      <>
        <h1 id='header'>Pick me ups</h1>
        <div>

        </div>
        {this.state.answers.length !== this.questions.length &&
          <div id='cardBody'>
            <h2>{this.questions[this.state.answers.length]}</h2>
            <textarea onChange={this.onTextAreaChange} value={this.state.currentAnswer} name="" id="inputBox" cols={30} rows={10}></textarea>
            <button onClick={this.onAnswerEnter}>Enter</button>
            <button onClick={this.returnPreviousQuestion}>Go Back</button>
            <button onClick={this.generateRandomQuote}>Give me wisdom</button>
          </div>
        }
        {this.state.answers.length === this.questions.length && <Quote resetAnswers={this.resetAnswers} answers={this.state.answers}></Quote>}
        
        &nbsp;
  
      </>
    );
  };

  public questions = ["How are you feeling right now?",
                      "Why do you think you are feeling this way?"
                     ]

  
  onTextAreaChange = (event: any) => {
    this.setState({currentAnswer: event.target.value})
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
