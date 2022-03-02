import React ,{ useEffect, useState } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Homepage2 from './components/Homepage2/Homepage2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DesignIQ from './components/DesignIQ/DesignIQ';


function App() {
  const [country , setCountry] = useState('')
  const [state , setState ] = useState('')

  useEffect(() => {
    // fetch(' https://ip.nf/me.json')
    fetch('http://ip-api.com/json')
    .then( res => res.json())
    .then(response => {
     console.log("Country is : ", response.country);
     setCountry(response.country)
     console.log("Region is: ", response.regionName);
      setState(response.regionName)
   })
   .catch((data, status) => {
     console.log('Request failed:', data);
   });
 },[])

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
          <Homepage country={country} region={state}/>
          </Route>
          <Route  path="/home">
          <Homepage2 />
          </Route>  
          {/* <Route  path="/design-iq">
          <DesignIQ />
          </Route>   */}
          
        </Switch>
      </div>
          {/* <DesignIQ /> */}

    </Router>
  );
}

export default App;
