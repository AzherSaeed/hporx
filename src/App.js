import React from 'react'
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Homepage2 from './components/Homepage2/Homepage2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route  path="/home">
          <Homepage2 />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
