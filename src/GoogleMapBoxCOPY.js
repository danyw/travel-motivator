import React, { useState } from "react";
import { useJsApiLoader, GoogleMap, Autocomplete, useLoadScript } from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

const GoogleMapBox = ({destinations}) => {
  const [libraries] = useState(["places"]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_Maps_API_Key,
    libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  console.log(destinations);
  return (
    <div>
      <h2>Google Map</h2>
      <GoogleMap center={center} zoom={10} mapContainerStyle={{ width: "500px", height: "500px" }}></GoogleMap>
    </div>
  );
};

export default GoogleMapBox;




import React, { useState } from "react";
import { useJsApiLoader, GoogleMap, Marker, DirectionsService, DirectionsRenderer, useLoadScript} from "@react-google-maps/api";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
const center = { lat: 48.8584, lng: 2.2945 };

const GoogleMapBox = ({ destinations }) => {
  const [directions, setDirections] = useState(null);
  const [libraries] = useState(["places"]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [address, setAddress] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_Maps_API_Key,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

// const handleGeoLocation = async destination => {
//   const results = await geocideByAddress(destination);
//   const latLng = await getLatLng(results[index]);
//   setAddress(desti);
//   setCoordinates(latLng);
// }

  const calculateAndDisplayRoute = (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(response);
        } else {
          console.error(`error fetching directions ${response}`);
        }
      }
    );
  };

  if (!isLoaded || loadError) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Google Map</h2>
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ width: "500px", height: "500px" }}
        onLoad={onMapLoad}
      >
        {destinations.map((destination, index) => (
          <Marker
            key={index}
            // position={{ lat: destination.lat, lng: destination.lng }}
            // position={{destination}}

            position={{ lat: 37, lng: 21.2945}}
            onClick={() => {
              if (index === 0) {
                calculateAndDisplayRoute(center, destination);
              } else {
                calculateAndDisplayRoute(destinations[index - 1], destination);
              }
            }}
          />
        ))}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapBox;



import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';

const center = { lat: 48.8584, lng: 2.2945 }; //TODO


const GoogleMapBox = ({ destinations }) => {

  const [libraries] = useState(["places"]); //TODO

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_Maps_API_Key,
    libraries,
  }); //TODO

  if (!isLoaded) {
    return <p>Loading...</p>;
  } //TODO

  const [directions, setDirections] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const getDirections = () => {
      const directionsService = new window.google.maps.DirectionsService();
      const waypoints = destinations.map((destination) => ({
        location: destination,
        stopover: true,
      }));

      directionsService.route(
        {
          origin: destinations[0],
          destination: destinations[destinations.length - 1],
          waypoints: waypoints.slice(1, -1),
          optimizeWaypoints: true,
          travelMode: 'DRIVING',
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };

    if (destinations.length > 1 && map) {
      getDirections();
    }
  }, [destinations, map]);

  return (
    <GoogleMap
      mapContainerStyle={{
        height: '500px',
        width: '1500px',
      }}
      center={destinations[0]}
      zoom={10}
      onLoad={(map) => {
        setMap(map);
      }}
    >
      {destinations.map((destination, index) => (
        <Marker
          key={index}
          position={destination}
          label={(index + 1).toString()}
        />
      ))}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default GoogleMapBox;
