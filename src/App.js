import React from "react";
// import SendData from "./components/SendData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import SendData from "./pages/SendData";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import DynamicProduct from "./pages/DynamicProduct";
import "./styles/App.scss";
import AllProducts from "./pages/AllProducts";
import AllCategories from "./pages/AllCategories";
export const baseURL = "http://localhost:5000";
const App = () => {
  return (
    <Router>
      <div className="app_container">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/allCategories/:category" exact>
            <AllCategories />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/create" exact>
            <SendData />
          </Route>
          <Route path="/product/:id" exact>
            <DynamicProduct />
          </Route>
          <Route path="/products" exact>
            <AllProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
