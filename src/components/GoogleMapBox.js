import React, {useState} from "react";
import {useJsApiLoader, GoogleMap, Autocomplete, useLoadScript} from '@react-google-maps/api';


const center = { lat: 48.8584, lng: 2.2945 }

const GoogleMapBox = () => {
  const [ libraries ] = useState(['places']);
  

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_Maps_API_Key,
        libraries,
    })

if (!isLoaded) {
    return <p>Loading...</p>
}

  return (
    <div>
      <h2>Google Map</h2>
<GoogleMap center={center} zoom={10} mapContainerStyle={{ width: '500px', height: '500px' }}>

</GoogleMap>


    </div>
  );
}

export default GoogleMapBox;