import React, { Suspense } from "react";
// import SendData from "./components/SendData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.scss";

import Navbar from "./components/Navbar";
import EditProductPage from "./pages/EditProductPage";
export const baseURL = "http://localhost:5000";
const SendData = React.lazy(() => import("./pages/SendData"));
const DynamicProduct = React.lazy(() => import("./pages/DynamicProduct"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Home = React.lazy(() => import("./pages/Home"));
const AllProducts = React.lazy(() => import("./pages/AllProducts"));
const AllCategories = React.lazy(() => import("./pages/AllCategories"));
const App = () => {
  // const [name, setname] = useState();
  // const [age, setage] = useState();
  // const changeHandler = (e) => {
  //   setname(e.target.value);
  // };
  // const changeHandlers = (e) => {
  //   setage(e.target.value);
  // };
  return (
    <Router>
      <div className="app_container">
        <Navbar />
        {/* <input type="text" onChange={changeHandler} />
        <input type="text" onChange={changeHandlers} />
        <Link to={`/Test/name=?${name}&age=${age}`}>Go To</Link>
        <Route path={`/Test/name=?${name}&age=?${age}`} exact></Route> */}
        <Suspense fallback={<div>LoadinG . . .</div>}>
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
            <Route path="/edit/:id" exact>
              <EditProductPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
