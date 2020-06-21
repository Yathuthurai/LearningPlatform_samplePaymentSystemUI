import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import PaymentCategories from "./components/PaymentCategories";
import Checkout from "./components/Checkout";
import MyTable from "./components/TableComponents/MyTable";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <PaymentCategories />
          </Route>
          <Route path="/paymentform" exact>
            <Checkout />
          </Route>
          <Route path="/mytable" exact>
            <MyTable />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
