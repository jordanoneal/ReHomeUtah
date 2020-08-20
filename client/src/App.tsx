import React from "react";
import "./App.css";
// import Signup from "./pages/Signup";
// import AccountInfo from "./pages/AccountInfo";
// import DummyHome from "./pages/DummyHome";
import DummyNav from "./components/DummyNav";
import SellerDetails from "./Pages/SellerDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import BuildYourPlan from "./Pages/BuildYourPlan";
import DummyHome from "./Pages/DummyHome";
import Signup from "./Pages/Signup";
import AccountInfo from "./Pages/AccountInfo";
import OrderConfirmation from "./Pages/Orderconfirmation";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        < DummyNav />
        <Router>
          <Switch>
            <Route exact path="/" component={DummyHome} />
            <Route exact path="/login" component={Signup} />
            <Route exact path="/accountinfo" component={AccountInfo} />
            <Route exact path="/">
              <DummyHome />
            </Route>
            <Route exact path="/login">
              <Signup />
            </Route>
            <Route exact path="/accountinfo">
              <AccountInfo />
            </Route>
            <Route exact path="/sellerdetails">
              <SellerDetails />
              </Route>
              <Route exact path="/buildyourplan">
              <BuildYourPlan/>
              </Route>
              <Route exact path="/orderconfirmation">
              <OrderConfirmation/>
              </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
