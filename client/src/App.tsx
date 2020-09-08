import React from "react";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import AccountInfo from "./pages/AccountInfo";
import HomePage from "./pages/Home";
import DummyNav from "./components/DummyNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { BuildYourPlan } from "./pages/BuildYourPan";
import Confirmation from "./pages/Confirmation";
import SellerDetails from "./pages/SellerDetails";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <DummyNav />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/accountinfo">
              <AccountInfo />
            </Route>
            <Route exact path="/buildyourplan">
              <BuildYourPlan></BuildYourPlan>
            </Route>
            <Route exact path="/sellersdetails">
              <SellerDetails />
            </Route>
            <Route exact path="/confirmation">
              <Confirmation />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
