import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
// import Photos from './Photos';

const center = { lat: 52.9540, lng: -1.1550 };

const GoogleMapBox = ({ destinations }) => {
  const [libraries, setLibraries] = useState(["places"]);
  const [directions, setDirections] = useState(null);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [distance, setDistance] = useState(0);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_Maps_API_Key,
    libraries,
  });

  useEffect(() => {
    if (loadError) {
      console.error(loadError);
      return;
    }

    if (!isLoaded) {
      return;
    }

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
  }, [destinations, isLoaded, loadError, map]);
  useEffect(() => {
    if (!directions) return;
    const legs = directions.routes[0].legs;
    const totalDistance = legs.reduce((acc, leg) => acc + leg.distance.value, 0);
    setDistance(totalDistance);
  }, [directions]);
  if (loadError) {
    return <p>There was a problem loading the map.</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  


  return (
    <div>
    <GoogleMap
      mapContainerStyle={{
        height: '500px',
        width: '1500px',
      }}
      center={center}
      zoom={10}
      onLoad={(map) => {
        setMap(map);
      }}
    >
      {destinations.map((destination, index) => (
        <Marker
          key={index}
          position={center}
          label={(index + 1).toString()}
        />
      ))}
      {directions && <DirectionsRenderer directions={directions} />}
      
    </GoogleMap>
    <p>Total distance: {distance / 1000} km or {(distance * 0.00062137).toFixed(3)} miles</p>
    {/* <Photos placeId={"ChIJGzE9DS1YwokRGUGph3MfLrk"} /> */}
    </div>
  );
};

export default GoogleMapBox;
