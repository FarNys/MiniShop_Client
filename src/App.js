import React from "react";
// import SendData from "./components/SendData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import SendData from "./components/SendData";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./styles/App.scss";
const App = () => {
  return (
    <Router>
      <div className="app_container">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/create" exact>
            <SendData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
