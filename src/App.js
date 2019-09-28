import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={ProductList} />
        <Route component={Default} />
      </Switch>
      <Modal></Modal>
    </React.Fragment>
  );
}

export default App;
