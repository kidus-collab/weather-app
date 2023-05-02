import React from "react";

const weatherInfo = ({ weatherData }) => {
  return (
    <div>
      <h1>{weatherData.name}</h1>
    </div>
  );
};

export default weatherInfo;
