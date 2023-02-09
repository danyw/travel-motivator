import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';

const center = { lat: 48.8584, lng: 2.2945 };

const GoogleMapBox = ({ destinations }) => {
  const [libraries, setLibraries] = useState(["places"]);
  const [directions, setDirections] = useState(null);
  const [map, setMap] = useState(null);

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

  if (loadError) {
    return <p>There was a problem loading the map.</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

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
