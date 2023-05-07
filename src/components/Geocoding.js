import React, { useState, useEffect } from "react";
import GetPhotosReferences from "./GetPhotosReferences";

const Geocoding = ({ destinations }) => {
  const [placesIds, setPlacesIds] = useState([]);

  useEffect(() => {
    destinations.forEach((destination) => {
      let APP_ID = process.env.REACT_APP_Maps_API_Key;
      let formatted_address = destination;
      // const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const proxyurl = "https://protected-everglades-68604.herokuapp.com/";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatted_address}&key=${APP_ID}`;
      fetch(`${proxyurl}${url}`)
        .then((response) => response.json())
        .then((data) => {
          const placeId = data.results[0].place_id;
          setPlacesIds((prevPlacesIds) => [...prevPlacesIds, placeId]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [destinations]);

  return (
    <div>
      {placesIds.map((placeId, index) => (
        <GetPhotosReferences key={placeId} placesId={placeId} />
      ))}
    </div>
  );
};

export default Geocoding;
