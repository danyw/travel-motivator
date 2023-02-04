import React, { useState } from "react";

const DestinationForm = ({ addDestination }) => {
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDestination(destination);
    setDestination("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Destination:</label>
      <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Type a destination" />
      <button type="submit">Add</button>
    </form>
  );
};

export default DestinationForm;
