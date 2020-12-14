import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./pages/homepage/home.component";

function App() {
  return (
    <div>
      <Route component={Home} />
    </div>
  );
}

export default App;
