import React from "react";

const DestinationList = ({ destinations }) => {
  return (
    <ul>
      {destinations.map((destination, index) => (
        <li key={index}>{destination}</li>
      ))}
    </ul>
  );
};

export default DestinationList;
