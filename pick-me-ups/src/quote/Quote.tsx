import React from "react";
import { Link } from "react-router-dom";

const Quote: React.FC = () => {
  return (
    <>
      <h1>quote page</h1>
      <Link to="/"> back to home page</Link>
      &nbsp;

    </>
  );
};

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

export default Quote;