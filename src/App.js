import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';


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

 console.log(country , state , 'region' );
  return (
    <>
    {/* {getLocation()} */}
   <Homepage country={country} region={state}/>
    </>
  );
}

export default App;
