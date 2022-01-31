import React from "react";

import {WeatherType} from "../types";
import {capitalize} from "../utils";

import style from "./ForecastWeatherCard.module.css";
import Icon from "./Icon";

interface Props {
  daily: WeatherType;
  i: number;
}

const ForecastWeatherCard: React.FC<Props> = ({daily, i}) => {
  const dtToReadableDay = (dt: number, today = false) => {
    const day = new Date(dt * 1000).toLocaleDateString("es", {weekday: "long"});

    return !today ? capitalize(day) : "Hoy";
  };

  return (
    <div className={style.container}>
      <div className={style.desc}>
        <span className={style.day}>{dtToReadableDay(daily.dt, i === 0 ? true : false)}</span>
        <small>{capitalize(daily.weather[0].description)}</small>
      </div>
      <div className={style.temp}>
        <span>
          {daily.temp.min} {daily.temp.max}{" "}
        </span>
      </div>
      <div>
        <Icon name={daily.weather[0].icon} size={2} />
      </div>
    </div>
  );
};

export default ForecastWeatherCard;
