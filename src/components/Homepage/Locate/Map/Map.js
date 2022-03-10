import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import axios from "axios";
const Map = ({ center, zoom, allAddresses }) => {
  const [locationInfo, setLocationInfo] = useState(false);
  const [marker, setMarker] = useState([]);

  const location = [
    "Apdo. de correos 8.079 Gijón",
    "Artilleria nº 28 Gijon",
    "Handboogstraat 29, 1012 XM",
    "Korte Leidsedwarsstraat 145-147",
    "Nieuwmarkt 14",
    "Tolhuisstraat 25 LN Tiel",
    "Hemonystraat 16",
    "Haarlemmerstraat 102",
    "Kerkstraat 39",
    "Amstelstraat 35",
    "Sint Antoniesbreestraat 71",
    "Prinsengracht 476",
    "Rembrandtplein 24",
    "Sint-Andriesstraat 20 Rotterdam",
    "Gillis van Ledenberchstraat 135",
    "Barentszstraat 130",
    "Prins Hendrikkade 89",
    "Molukkenstraat 581",
    "Wolphaertsbocht 281Rotterdam",
    "Frederik Hendrikstraat 69HS",
    "Valkenboslaan 45 /A Den Haag",
    "Oudebrugsteeg 27",
    "Prinsengracht 312",
    "Reguliersdwarsstraat 29",
    "Oudezijds Voorburgwal 191",
    "Van der Helstplein 8h",
    "Eerste van der Helststraat 70",
    "Vismarkt 23, 3511 KS Utrecht",
    "Rusland 16",
    "Rozengracht 90Zaandam",
    "Reguliersdwarsstraat 6",
    "Korte Koningsstraat 2",
    "10, Balthasar Floriszstraat",
    "Woestduinstraat 76",
    "Brouwersgracht 11",
    "Reguliersgracht 27",
    "Hoofdweg 226",
    "Sint Antoniesbreestraat 77",
    "Hoofdweg 174",
    "Utrechtsestraat 14",
    "Haringpakkerssteeg 3",
    "Bergstraat 11-1",
  ];

  // const getShipmentFetchEstimate = async (obj) => {
  //   const promise = [];
  //   obj.forEach(item => {
  //     promise.push(
  //       getestimate(addrsz)
  //     )
  //   });
  //   const res = await Promise.all(promise);
  //   return res;
  // }

 
  // useEffect(() => {
  //   const promise = [];
  //   location.forEach((item) => {
  //     promise.push( getGeocode(item));
  //   });
  //   const res = await Promise.all(promise);
  //   return res;
  // }, []);

  useEffect(() => {
    function getLatLng() {
      let i = 0;
      for (i; i < location.length; i++) {
        getGeocode(location[i]);
      }
      console.log(i, "loops run");
    }
    function getGeocode(lc) {
      axios
        .get("https://maps.googleapis.com/maps/api/geocode/json", {
          params: {
            address: lc,
            key: "AIzaSyCPaxhUQwzWzvTyFp_ao6vGMhUnu8qy4dI",
          },
        })
        .then(function (response) {
          setMarker([...marker, {'azher' : 'adfafd'}]);
  
          console.log(response.data.results[0].geometry.location, "getlatlan");
        })
        .catch(function (error) {
          console.log(error, "Error");
        });
    }
  
    if (allAddresses.length > 0) {
      getLatLng();
    }
  }, [allAddresses]);

  console.log(marker, "Marker options");

  

  function getGeocode(lc) {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: lc,
          key: "AIzaSyCPaxhUQwzWzvTyFp_ao6vGMhUnu8qy4dI",
        },
      })
      .then(function (response) {
        setMarker([...marker, {'azher' : 'adfafd'}]);

        console.log(response.data.results[0].geometry.location, "getlatlan");
      })
      .catch(function (error) {
        console.log(error, "Error");
      });
  }

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCPaxhUQwzWzvTyFp_ao6vGMhUnu8qy4dI" }}
        defaultCenter={center}
        defaultZoom={zoom}
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
Map.defaultProps = {
  center: {
    lat: 31.5204,
    lng: 74.3587,
  },
  zoom: 8,
};

export default Map;
