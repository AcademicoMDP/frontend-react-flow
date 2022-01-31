import React from "react";

import {WeatherType} from "../types";

import style from "./ForecastWeatherList.module.css";
import ForecastWeatherCard from "./ForecastWeatherCard";

interface Props {
  fore: WeatherType[];
}

const ForecastWeatherList: React.FC<Props> = ({fore}) => {
  return (
    <>
      <h3 className={style.h3}>Pronóstico para los próximos 5 días</h3>
      <div className={style.cardcontainer}>
        {fore.map((daily: WeatherType, index: number) => (
          <ForecastWeatherCard key={index} daily={daily} i={index} />
        ))}
      </div>
    </>
  );
};

export default ForecastWeatherList;
