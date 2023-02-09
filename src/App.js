import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// components
import Header from "./components/Header";
import DestinationForm from "./components/DestinationForm";
import DestinationList from "./components/DestinationList";
import GoogleMapBox from "./components/GoogleMapBox";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [destinationsSubmited, setDestinationsSubmited] = useState([]);
  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };
  const handleFindTrip = () => {
    setDestinationsSubmited([...destinations]);
  };

  return (
    <div className="App">
      <Header />
      <div className="DestinationForm">
        {" "}
        <DestinationForm addDestination={addDestination} />
        <DestinationList destinations={destinations} setDestinations={setDestinations} />
        <button onClick={() => setDestinations([])}>Clear</button>
        <button onClick={handleFindTrip}>Find Trip</button>
      </div>
      <div className="<Map">
        <GoogleMapBox destinations={destinationsSubmited} />
      </div>
    </div>
  );
}

export default App;
