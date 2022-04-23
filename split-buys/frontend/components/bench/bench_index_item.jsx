import React from "react";

const BenchIndexItem = (props) => {
  const {bench} = props; 
  return (
    <div>
      <h3>Bench: {bench.id}</h3>
      <p>{bench.description}</p>
      <p>
        <span>Latitude - {bench.lat}</span>
        <span>Longitude - {bench.lng}</span>
      </p>
    </div>
  )
};

export default BenchIndexItem