import React from "react";

import {WeatherType} from "../types";
import {capitalize} from "../utils";

interface Props {
  fore: WeatherType[];
}

const ForecastWeatherList: React.FC<Props> = ({fore}) => {
  const dtToReadableDay = (dt: number, today = false) => {
    const day = new Date(dt * 1000).toLocaleDateString("es", {weekday: "long"});

    return !today ? capitalize(day) : "Hoy";
  };

  return (
    <>
      {fore.map((daily: WeatherType, index: number) => (
        <div key={daily.dt}>
          <span>{dtToReadableDay(daily.dt, index === 0 ? true : false)}</span>
          <span> min {daily.temp.min} </span>
          <span> max {daily.temp.max} </span>
          <span>{daily.weather[0].icon}</span>
        </div>
      ))}
    </>
  );
};

export default ForecastWeatherList;
