import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Homepage2 from "./components/Homepage2/Homepage2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./components/AgenciesPage/MainPage";
import LocatehomePage from "./components/LocaterPage/LocatehomePage";
function App() {
 

  //dasfasdf//
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/home">
            <Homepage2 />
          </Route>
          <Route path="/agency">
            <MainPage />
          </Route>
          <Route path="/locator">
            <LocatehomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
