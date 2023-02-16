import React, { useState, useEffect } from "react";
import axios from "axios";
import GetPhotosReferences from "./GetPhotosReferences";

const Geocoding = ({ destinations }) => {
  const [placesIds, setPlacesIds] = useState([]);

  useEffect(() => {
    destinations.forEach((destination) => {
      let APP_ID = process.env.REACT_APP_Maps_API_Key;
      let formatted_address = destination;
      axios.get(`/geocode/json?address=${formatted_address}&key=${APP_ID}`).then((res) => {
        const placeId = res.data.results[0].place_id;
        setPlacesIds((prevPlacesIds) => [...prevPlacesIds, placeId]);
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
