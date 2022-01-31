import React from "react";
import {IoWaterOutline} from "react-icons/io5";
import {FiWind} from "react-icons/fi";
import {RiTempColdLine} from "react-icons/ri";

import {WeatherType} from "../types";
import {capitalize, roundOneDecimal} from "../utils";

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
        {roundOneDecimal(Number(current.temp))}
        <span className={style.degree}>°</span>
      </div>
      <div className={style.otherInfo}>
        <div>
          <small>Térmica</small>
          <span>
            <RiTempColdLine />
            {roundOneDecimal(Number(current.feels_like))}°
          </span>
        </div>
        <div>
          <small>Viento</small>
          <span>
            <FiWind />
            {(current.wind_speed * 3.6).toFixed(1)} km/h
          </span>
        </div>
        <div>
          <small>Humedad</small>
          <span>
            <IoWaterOutline /> {current.humidity}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
