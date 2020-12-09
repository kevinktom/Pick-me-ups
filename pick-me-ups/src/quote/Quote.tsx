import React from "react";
import './quote.css';
import quotationMark from "../quotation-mark.svg"

interface QuoteObject {
  text?: string
  author?: string
}

class Quote extends React.Component<{resetAnswers: () => void, answers: string[]}, { quote: QuoteObject, fadeIn: boolean }>{
  constructor(props: any){
    super(props);
    this.state = {
      quote: {
        "text": "",
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
    const {text, author} = this.state.quote;
    const fadeInClass = this.state.fadeIn ? "fade-in" : "";
    return (
      <>
      <div id='quoteBody' className="container-quote">
        { text &&
          <div>
            <div className="button-actions" id="button-quote">
              <button onClick={this.getRandomQuote}>Another quote</button>
              <button onClick={this.props.resetAnswers}>Reset</button>

            </div>
            {/* <p>{this.state.quote.text} - {this.state.quote.author ? this.state.quote.author : 'Unknown'}</p> */}
            <div style={{display:"flex"}} className="fade-in">
              <img src={quotationMark} alt="quotation mark" className="quotation-mark-img"/>
            </div>
            <div 
              className={`box-quote ${fadeInClass}`} 
              onAnimationEnd={this.onAnimationEnd}
              onAnimationStart={this.onAnimationStart}
            >
              <div className="quotetext">
                {text}
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

  componentDidUpdate = () => {
    
  }
  

  getQuotes = () => {
    const that = this;
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      that.quotes = data;
      that.getRandomQuote();
    });
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
