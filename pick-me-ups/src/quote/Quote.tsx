import React from "react";
import { Link } from "react-router-dom";

interface QuoteObject {
  text?: string
  author?: string
}

class Quote extends React.Component<{}, { quote: QuoteObject }>{
  constructor(props: any){
    super(props);
    this.state = {
      quote: {"text": "He is able who thinks he is able.",
              "author": "Buddha"}
    }
  }

  public quotes: [] = [];

  render = () => {
    return (
      <>
        <p>{this.state.quote.text} - {this.state.quote.author}</p>
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
