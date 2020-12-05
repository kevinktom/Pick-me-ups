import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import Quote from "./quote/Quote"

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </>
);

export default App;