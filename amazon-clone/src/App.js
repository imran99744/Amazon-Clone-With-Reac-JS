import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IE9m0A6cMeHh9dt39bOpOlyNSh2xrw5GN8JfKE1TUhFTlqr33r3A4a1ewlI99VpguTYknBvknSyAfLamnEWJKJ300oM6eoMkG"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  // useEffect is POWERFUL
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // any cleanup operation go in here...
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
