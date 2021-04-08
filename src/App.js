import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pscreen from "./Pscreen";
import Error from "./Error";
import Cart from "./Cart";
import Checkout from "./Checkout";
import End from "./End";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Pscreen/:id" component={Pscreen} />
          <Route path="/Cart/:id" component={Cart} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/End" component={End} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
