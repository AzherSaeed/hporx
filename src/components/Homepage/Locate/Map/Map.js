import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import axios from "axios";
import {ViewMoreBtn} from '../../../Globals/Globals';
import {LocateUsButton} from '../StylesLocate';
import {useHistory} from 'react-router-dom';


const Map = ({allAddresses , doctorsData }) => {
  const history = useHistory()
  const locationFound = localStorage.getItem('saveCurentLocation')

  
  const [locationInfo, setLocationInfo] = useState(false);
  const [marker, setMarker] = useState([{
    lat:40.4637,
    lng:3.7492
  }]);
  const [centerLocation , setCenterLoacation] = useState("");
  const [defaulcenterLocation , setDefaultCenterLoacation] = useState([]);
  const [selectedAddress, setselectedAddress] = useState({})

 console.log(locationFound,"Location.....!")
  useState(() => {
    if(locationFound){
      setDefaultCenterLoacation(JSON.parse(locationFound));
    }
    setMarker([JSON.parse(locationFound)]);
  },[locationFound])


  useEffect(() => {
    if(!locationFound){
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat=position.coords.latitude;
         const lng=position.coords.longitude;
         setDefaultCenterLoacation({lat,lng});
         setMarker({lat,lng});
       });
    }

  }, []);

  useEffect( async () => {
    const arr = [];
    if(allAddresses){
      for (let i = 0; i < allAddresses.length; i++) {
        if(allAddresses[i]!==""){
        arr.push(
          axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
              address: allAddresses[i],
              key: "AIzaSyCPaxhUQwzWzvTyFp_ao6vGMhUnu8qy4dI",
            },
          })
        );}
      }
      
      const res = await Promise.all(arr);
     // console.log(res,"Data...................")
      const getData = res.filter((item) => item.data.status == "OK");
     
  
      // const getlatlan = getData.map((item) => item.data.results[0].geometry.location);

      const getlatlan = getData.map((item) => {
        return {
           address : item.config.params.address,
           lat : item.data.results[0].geometry.location.lat,
           lng : item.data.results[0].geometry.location.lng
        }
      } )
      console.log(getlatlan , 'getlatlangetlatlangetlatlan')
      setMarker(getlatlan);
      setCenterLoacation(getlatlan[0]);
    }
    else return

  }, [allAddresses]);


  const findExactAddressHandler = (selectedAddress) => {
    const getMatchedAddress = doctorsData.find((item) => item._address == selectedAddress );
    setselectedAddress(getMatchedAddress);
    setLocationInfo(true);
  } 

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCPaxhUQwzWzvTyFp_ao6vGMhUnu8qy4dI" }}
        defaultCenter={defaulcenterLocation}
        defaultZoom={5}
        center={centerLocation}
      >
        {marker.map((v) => (
          <LocationMarker
            lat={v.lat}
            lng={v.lng}
            onClick={(e) => findExactAddressHandler(v.address)}
          />
        ))}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox selectedAddress={selectedAddress} />}
      <LocateUsButton onClick={() => history.push('/locator')} >Locate Us</LocateUsButton>
    </div>
  );
};


export default Map;
