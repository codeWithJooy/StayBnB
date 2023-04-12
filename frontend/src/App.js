import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignUp } from "./Pages/Signup/Signup";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
