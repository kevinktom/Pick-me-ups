import React from "react";
import './quote.css';

interface QuoteObject {
  text?: string
  author?: string
}

class Quote extends React.Component<{}, { quote: QuoteObject }>{
  constructor(props: any){
    super(props);
    this.state = {
      quote: {"text": "",
              "author": ""}
    }
  }

  public quotes: [] = [];

  render = () => {
    return (
      <>
      <div id='quoteBody'>
        <p>{this.state.quote.text} - {this.state.quote.author}</p>
      </div>
        &nbsp;
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
      that.setState({quote: that.getRandomQuote()})
    });
  }

  getRandomQuote = () => {
    const idx = this.getRandomNumber(0, this.quotes.length)
    return this.quotes[idx];
  }

  getRandomNumber = (minNum: number = -Infinity, maxNum: number = Infinity) => {
    return Math.floor(Math.random() * (maxNum - minNum) ) + minNum;
  }
}

export default Quote;
