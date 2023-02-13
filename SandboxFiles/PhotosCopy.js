import React, { useState, useEffect } from "react";

const Photos = ({ placeId }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photo&key=${process.env.REACT_APP_Maps_API_Key}`
      );
      const data = await response.json();
      setPhotos(data.result.photos || []);
    };

    fetchPhotos();
  }, [placeId]);

  return (
    <div>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${process.env.REACT_APP_Maps_API_Key}`}
          alt={`Place photo #${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Photos;

//ToDO use it later when placeId is available, instead of a formatted address