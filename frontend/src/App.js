import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignUp } from "./Pages/Signup/Signup";
import { Home } from "./Pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
