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
    <section className="flex flex-row flex-nowrap ">
      <div className="DestinationForm py-3 px-2 flex flex-col content-center border-zinc-300 border-8  m-2 shadow-md ">
        {" "}
        <DestinationForm addDestination={addDestination} />
        <DestinationList destinations={destinations} setDestinations={setDestinations} />
        <button onClick={() => setDestinations([])} className="text-red-500 font-serif border-2 rounded-md hover:opacity-70  mx-20 px-1 py-1 bg-gray-200 shadow-x1">Clear</button>
        <button onClick={handleFindTrip} className="text-blue-500 font-serif border-2 rounded-md hover:opacity-70   mt-1 mx-20 px-1 py-1 bg-gray-200 shadow-x1 font-bold">Find Trip</button>
      </div>
      {/* <div className="<Map flex"> */}
        {/* <GoogleMapBox destinations={destinationsSubmited} destinationsId={destinationsSubmitedId} /> */}
        <GoogleMapBox destinations={destinationsSubmited} />
      {/* </div> */}
    </section>
  );
};

export default Home;
