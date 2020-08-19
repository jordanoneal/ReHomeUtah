import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import AccountInfo from "./pages/AccountInfo";
import DummyHome from "./pages/Home";
import DummyNav from "./components/DummyNav";
import DummySellersDetails from "./pages/DummySellersDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { BuildYourPlan } from "./pages/BuildYourPan";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
        <DummyNav />
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
            <Route exact path="/buildyourplan">
              <BuildYourPlan></BuildYourPlan>
            </Route>
            <Route exact path="/sellersdetails">
              <DummySellersDetails />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
