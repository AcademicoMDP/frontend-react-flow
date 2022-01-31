import React from "react";

import {WeatherType} from "../types";
import {capitalize} from "../utils";

import style from "./CurrentWeatherCard.module.css";
import Icon from "./Icon";

interface Props {
  current: WeatherType;
}

const CurrentWeatherCard: React.FC<Props> = ({current}) => {
  return (
    <div className={style.container}>
      <div className={style.current}>{capitalize(current.weather[0].description)}</div>
      <div className={style.icon}>
        <Icon name={current.weather[0].icon} size={4} />
      </div>
      <div className={style.current}>
        {current.temp}
        <span className={style.degree}>°</span>
      </div>
      <div className={style.otherInfo}>
        <div>
          <small>Térmica</small>
          <div>{current.feels_like}°</div>
        </div>
        <div>
          <small>Viento</small>
          <span>{(current.wind_speed * 3.6).toFixed(1)} km/h</span>
        </div>
        <div>
          <small>Humedad</small>
          <span>{current.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
