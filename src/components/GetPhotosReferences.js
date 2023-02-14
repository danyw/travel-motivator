import React, { useState, useEffect } from "react";
import axios from "axios";

const GetPhotosReferences = (props) => {
    let [photos, setPhotos] = useState([]);


    useEffect(() => {
        let APP_ID = process.env.REACT_APP_Maps_API_Key;
        // let placeId = "ChIJN1t_tDeuEmsRUsoyG83frY4";
        let placeId = props.placesId;
        console.log(placeId)
        axios.get(`/place/details/json?fields=name%2Crating%2Cphotos&place_id=${placeId}&key=${APP_ID}`)
        .then(res => {
            const photos = res.data.result.photos;
            console.log(photos);
            setPhotos(photos);
        });
    }, [props.placesId]);

return (
    <div className="Rerun">
        {photos.map((photo, index) => (
            <img
                key={index}
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${process.env.REACT_APP_Maps_API_Key}`}
                alt={`Place #${index + 1}`}
            />
        ))}
    </div>


);

};


  

export default GetPhotosReferences;



