import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
