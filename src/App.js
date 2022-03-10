import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Homepage2 from "./components/Homepage2/Homepage2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./components/AgenciesPage/MainPage";
import LocatehomePage from "./components/LocaterPage/LocatehomePage";
function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((response) => {
        setCountry(response.country);
        setState(response.regionName);
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);

  //dasfasdf//
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage country={country} region={state} />
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
