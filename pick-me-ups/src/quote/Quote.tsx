import React from "react";
import './quote.css';
import quotationMark from "../quotation-mark.svg"

interface QuoteObject {
  text?: string
  author?: string
}

class Quote extends React.Component<{resetAnswers: () => void, answers: string[]}, { quote: QuoteObject }>{
  constructor(props: any){
    super(props);
    this.state = {
      quote: {
        "text": "",
        "author": ""
      }
    }
  }

  public quotes: [] = [];

  render = () => {
    const {text, author} = this.state.quote;

    return (
      <>
      <div id='quoteBody' className="container-quote">
        { text &&
          <div>
            {/* <p>{this.state.quote.text} - {this.state.quote.author ? this.state.quote.author : 'Unknown'}</p> */}
            <div style={{display:"flex"}}>
              <img src={quotationMark} alt="quotation mark" className="quotation-mark-img"/>
            </div>
            <div className="box-quote">
              <div className="quotetext">
                {text}
              </div>
              <div className="author">
                - {author}
              </div>

            </div>
            <div className="button-actions">

              <button onClick={this.getRandomQuote}>Give me another quote</button>
              <button onClick={this.props.resetAnswers}>Reset</button>
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
  }

  getRandomNumber = (minNum: number = -Infinity, maxNum: number = Infinity) => {
    return Math.floor(Math.random() * (maxNum - minNum) ) + minNum;
  }
}

export default Quote;
