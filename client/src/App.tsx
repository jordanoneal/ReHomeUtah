import React from "react";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import AccountInfo from "./pages/AccountInfo";
import DummyHome from "./pages/Home";
import DummyNav from "./components/DummyNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { BuildYourPlan } from "./pages/BuildYourPan";
import SellerDetails from "./pages/SellerDetails";
import Confirmation from "./pages/Confirmation";
import DummySellersDetails from "./pages/DummySellerDetails";

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
              <LoginPage />
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
            <Route exact path="/confirmation">
              <Confirmation/>
              </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
