import React from "react";
import './quote.css';
import quotationMark from "../quotation-mark.svg";
const axios = require("axios");

interface QuoteObject {
  quote?: string
  author?: string
}

class Quote extends React.Component<{resetAnswers: () => void, answers: string[]}, { quote: QuoteObject, fadeIn: boolean }>{
  constructor(props: any){
    super(props);
    this.state = {
      quote: {
        "quote": "",
        "author": ""
      },
      fadeIn: true
    }
  }

  onAnimationStart = () => {
    this.setState({
      fadeIn: true
    })
  }

  onAnimationEnd = () => {
    this.setState({
      fadeIn: false
    })
  }

  public quotes: [] = [];

  render = () => {
    const {quote, author} = this.state.quote;
    const fadeInClass = this.state.fadeIn ? "fade-in" : "";
    return (
      <>
      <div id='quoteBody' className="container-quote">
        { quote &&
          <div>
            <div className="button-actions" id="button-quote">
              <button onClick={this.getRandomQuote} className="fade-in">Another quote</button>
              <button onClick={this.props.resetAnswers} className="fade-in">Reset</button>
            </div>
            <div style={{display:"flex"}} className="fade-in">
              <img src={quotationMark} alt="quotation mark" className="quotation-mark-img"/>
            </div>
            <div 
              className={`box-quote ${fadeInClass}`} 
              onAnimationEnd={this.onAnimationEnd}
              onAnimationStart={this.onAnimationStart}
            >
              <div className="quotetext">
                {quote}
              </div>
              &nbsp; 
              <div className="author">
                - {author ? author : 'Unknown'}
              </div>

            </div>
          </div>
        }
      </div>

      </>
    );
  };

  componentDidMount = () => {
    this.getQuotes();
  }

  getQuotes = () => {
    const that = this;
    const answers = this.props.answers.join(' ');
    axios.post("https://backend-pickmeups.herokuapp.com/api/quotes", { input: answers })
    .then(function(response: any) {
      that.quotes = response.data;
      that.getRandomQuote();
      return response;
    })
  }

  getRandomQuote = () => {
    const idx = this.getRandomNumber(0, this.quotes.length);
    this.setState({quote: this.quotes[idx]});
    this.onAnimationEnd();
    this.onAnimationStart();
  }

  getRandomNumber = (minNum: number = -Infinity, maxNum: number = Infinity) => {
    return Math.floor(Math.random() * (maxNum - minNum) ) + minNum;
  }
}

export default Quote;
