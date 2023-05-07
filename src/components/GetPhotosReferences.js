import React, { useState, useEffect } from "react";

const GetPhotosReferences = (props) => {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    let APP_ID = process.env.REACT_APP_Maps_API_Key;
    let placeId = props.placesId;
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const proxyurl = "https://protected-everglades-68604.herokuapp.com/";
    const url = "https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cphotos&place_id=";

    fetch(`${proxyurl}${url}${placeId}&key=${APP_ID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const photos = data.result.photos;
        setPhotos(photos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (photos === undefined) return;

  return (
    <div className="Rerun flex flex-row gap-1 flex-wrap justify-center pt-4">
      {photos.map((photo, index) => (
        <img
          className="hover:opacity-75 transition ease-in-out duration-150"
          key={index}
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${process.env.REACT_APP_Maps_API_Key}`}
          alt={`Place #${index + 1}`}
        />
      ))}
    </div>
  );
};

export default GetPhotosReferences;
