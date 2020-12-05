import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import './home.css';
// import {withRouter} from 'react-router-dom';
import { withRouter } from "react-router";

class Home extends React.Component{

  render() {
    return (
      <>
        <h1 id='header'>Pick me ups</h1>
        <Link to="/quote"> back to quote page</Link>
  
        <div id='cardBody'
              >
            {this.moods.map(mood => (
              <div id='moods'>
                <p>{mood}</p>
              </div>
            ))}
        </div>
        &nbsp;
  
      </>
    );
  };

  // redirectToQuote = () => {
  //   this.props.history.push('/quote')
  // }

  public moods = [ "I'm feeling depressed",
                   "I hope I don't mess up",
                   "Everyone is going to laugh at me",
                   "I'm not good enough",
                   "What's the point?"
                 ];
}




export default Home;