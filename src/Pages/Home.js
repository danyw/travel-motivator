import React from "react";
import { useState } from "react";

import DestinationForm from "../components/DestinationForm";
import DestinationList from "../components/DestinationList";
import GoogleMapBox from "../components/GoogleMapBox";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [destinationsSubmited, setDestinationsSubmited] = useState([]);
  // const [destinationsSubmitedId, setDestinationsSubmitedId] = useState([]);

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };
  const handleFindTrip = () => {
    setDestinationsSubmited([...destinations]);
  };

  return (
    <section>
      <div className="DestinationForm">
        {" "}
        <DestinationForm addDestination={addDestination} />
        <DestinationList destinations={destinations} setDestinations={setDestinations} />
        <button onClick={() => setDestinations([])}>Clear</button>
        <button onClick={handleFindTrip}>Find Trip</button>
      </div>
      <div className="<Map">
        {/* <GoogleMapBox destinations={destinationsSubmited} destinationsId={destinationsSubmitedId} /> */}
        <GoogleMapBox destinations={destinationsSubmited} />
      </div>
    </section>
  );
};

export default Home;
