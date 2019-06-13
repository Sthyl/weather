import React from 'react';

const WeatherList = props => {
  const weatherConditions = Object.entries(props.weatherConditions).map(([key, val]) => {
    return <li key={key}>{key}: {val}</li>;
  });

  return(
    <div>{weatherConditions}</div>
  );
}

export default WeatherList;
