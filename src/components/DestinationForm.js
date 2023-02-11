import React, { useState, useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

const DestinationForm = ({ addDestination }) => {
  const [destination, setDestination] = useState("");
  // const [destinationId, setDestinationId] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  // const [destinationListId, setDestinationListId] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const autocompleteRef = useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_Maps_API_Key,
    libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    let selectedPlace;
    if (autocompleteRef.current) {
      selectedPlace = autocompleteRef.current.getPlace();
       console.log(selectedPlace);
    }

    let newDestination = selectedPlace ? selectedPlace.formatted_address : destination;
    // let newDestinationId = selectedPlace ? selectedPlace.place_id : destination;
    

    if (!destinationList.includes(newDestination)) {
      setDestinationList([...destinationList, newDestination]);
      // setDestinationListId([...destinationListId, newDestinationId]);
      addDestination(newDestination);
      setErrorMessage("");
    } else {
      setErrorMessage("This destination is already in the list.");
    }

    setDestination("");
  };

  const onPlaceChanged = () => {
    let selectedPlace;
    if (autocompleteRef.current) {
      selectedPlace = autocompleteRef.current.getPlace();
    }
    if (selectedPlace) {
      setDestination(selectedPlace.formatted_address);
      // setDestinationId(selectedPlace.place_id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Destination:</label>
      <Autocomplete
        onLoad={(autocomplete) => {
          autocompleteRef.current = autocomplete;
        }}
        onPlaceChanged={onPlaceChanged}
      >
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Type a destination" />
      </Autocomplete>

      <button type="submit">Add</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};

export default DestinationForm;
