import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


// components
import Header from "./components/Header";
import DestinationForm from "./components/DestinationForm";
import DestinationList from "./components/DestinationList";
import GoogleMapBox from "./components/GoogleMapBox";


// const libraries = ['places'];
function App() {
  const [destinations, setDestinations] = useState([]);

  

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };



  return (
    <div className="App">
      <Header />
      <div className="DestinationForm">
        {" "}
        <DestinationForm addDestination={addDestination} />
        <DestinationList destinations={destinations} setDestinations={setDestinations} />
      </div>
      <div className="<Map">
      <GoogleMapBox/>
      </div>
    </div>
  );
}

export default App;
