import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import axios from "axios";



const GetPhotosReferences = () => {
    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        let APP_ID = process.env.REACT_APP_Maps_API_Key;
        let placeId = "ChIJN1t_tDeuEmsRUsoyG83frY4";
        axios.get(`/place/details/json?fields=name%2Crating%2Cphotos&place_id=${placeId}&key=${APP_ID}`)
        .then(res => {
            const photos = res.data;
            console.log(photos);
            setPhotos(photos);
        });
    }, []);

return

}


  

export default GetPhotosReferences;



