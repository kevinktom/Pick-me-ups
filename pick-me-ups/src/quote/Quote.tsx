import React from "react";
import { Link } from "react-router-dom";

class Quote extends React.Component{
  constructor(props: any){
    super(props);
  }

  public quotes: [] = [];
  public quote = {
                        "text": "He is able who thinks he is able.",
                        "author": "Buddha"
                      };

  render = () => {
    return (
      <>
        <p>{this.quote.text} - {this.quote.author}</p>
        &nbsp;
      </>
    );
  };

  componentDidMount = () => {
    this.getQuotes();
    this.quote = this.getRandomQuote()
  }
  

  getQuotes = () => {
    const that = this;
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      that.quotes=data;
      console.log(that.quotes);
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
