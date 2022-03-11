import React from "react";

const Index = ({ stateValue, data }) => {
  
  return (
    <div style={{ backgroundColor: "coral", padding: "30px" }}>
      <h1>Rendering the card component</h1>
      <h2>{stateValue}</h2>
      <h4>{data}</h4>
    </div>
  );
};

export default Index;
