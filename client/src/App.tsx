import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import AccountInfo from "./pages/AccountInfo";
import DummyHome from "./pages/DummyHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DummyHome} />
          <Route exact path="/login" component={Signup} />
          <Route exact path="/accountinfo" component={AccountInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
