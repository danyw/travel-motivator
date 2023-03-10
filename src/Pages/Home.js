import React from "react";
import { useState } from "react";

import DestinationForm from "../components/DestinationForm";
import DestinationList from "../components/DestinationList";
import GoogleMapBox from "../components/GoogleMapBox";
import Geocoding from "../components/Geocoding";

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [destinationsSubmited, setDestinationsSubmited] = useState([]);

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };
  const handleFindTrip = () => {
    setDestinationsSubmited([...destinations]);
    removeElementsByClass("Rerun");
  };

  return (
    <section className="flex flex-col flex-nowrap max-w-screen-xl mx-auto  ">
      <div className="flex flex-col flex-nowrap   gap-2  md:flex-row ">
        <div className="DestinationForm py-3 px-2 flex flex-col content-center border-zinc-300 border-8  m-2 shadow-md ">
          {" "}
          <DestinationForm addDestination={addDestination} />
          <DestinationList destinations={destinations} setDestinations={setDestinations} />
          <button
            onClick={() => setDestinations([])}
            className="text-red-500 font-serif border-2 rounded-md hover:opacity-70  mx-20 px-1 py-1 bg-gray-200 shadow-x1"
          >
            Clear
          </button>
          <button
            onClick={handleFindTrip}
            className="text-blue-500 font-serif border-2 rounded-md hover:opacity-70   mt-1 mx-20 px-1 py-1 bg-gray-200 shadow-x1 font-bold"
          >
            Find Trip
          </button>
        </div>
        <GoogleMapBox destinations={destinationsSubmited} />
      </div>
      <Geocoding destinations={destinationsSubmited} />
    </section>
  );
};

export default Home;
