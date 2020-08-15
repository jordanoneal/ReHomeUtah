import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import AccountInfo from "./pages/AccountInfo";
import DummyHome from "./pages/DummyHome";
import DummyNav from "./components/DummyNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        < DummyNav />
        <Router>
          <Switch>
            {/* <Route exact path="/" component={DummyHome} />
            <Route exact path="/login" component={Signup} />
            <Route exact path="/accountinfo" component={AccountInfo} /> */}
            <Route exact path="/">
              <DummyHome />
            </Route>
            <Route exact path="/login">
              <Signup />
            </Route>
            <Route exact path="/accountinfo">
              <AccountInfo />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
