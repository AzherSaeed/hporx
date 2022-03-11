import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import axios from "axios";
const Map = ({allAddresses}) => {
  const [locationInfo, setLocationInfo] = useState(false);
  const [marker, setMarker] = useState([]);
  const [centerLocation , setCenterLoacation] = useState('');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
     const lat=position.coords.latitude;
      const lng=position.coords.longitude;
      setCenterLoacation({lat,lng});
    });
  }, []);

  useEffect( async () => {
    const arr = [];
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

    const getData = res.filter((item) => item.data.status == "OK");
   

    const getlatlan = getData.map((item) => item.data.results[0].geometry.location);
    setMarker(getlatlan);
    setCenterLoacation(getlatlan[0])

  }, [allAddresses]);




 

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCPaxhUQwzWzvTyFp_ao6vGMhUnu8qy4dI" }}
        defaultCenter={centerLocation}
        defaultZoom={5}
        center={centerLocation}
      >
        {marker.map((v) => (
          <LocationMarker
            lat={v.lat}
            lng={v.lng}
            onClick={() => setLocationInfo(true)}
          />
        ))}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox />}
    </div>
  );
};


export default Map;
