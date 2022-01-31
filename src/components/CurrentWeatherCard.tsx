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
      <div className={style.icon}>
        <Icon name={current.weather[0].icon} size={4} />
      </div>
      <div className={style.current}>
        {current.temp}
        <span className={style.degree}>°</span>
      </div>
      <div>{capitalize(current.weather[0].description)}</div>
      {/* <div>ST: {current.feels_like}</div> */}
    </div>
  );
};

export default CurrentWeatherCard;
