import React from "react";
import "./App.css";
import Signup from "./Pages/Signup";
import AccountInfo from "./Pages/AccountInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BuildYourPlan from "./Pages/BuildYourPlan";

function App() {
  return (
    <div className="App">
      {/* <Layout> */}
      <Router>
        <Switch>
          <Route exact path="/login" component={Signup} />
          <Route exact path="/accountinfo" component={AccountInfo} />
           <Route exact path="/buildyourplan" component={BuildYourPlan} />
        </Switch>
      </Router>
      {/* </Layout> */}
    </div>
  );
}

export default App;
