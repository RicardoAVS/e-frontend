import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import ShopPage from "./components/shop/shop.component";

import Home from "./pages/homepage/home.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
