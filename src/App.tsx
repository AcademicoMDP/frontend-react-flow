import React, {useCallback, useEffect, useState} from "react";

import {api} from "./api";
import "./App.css";
import CitySelector from "./components/CitySelector";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastWeatherList from "./components/ForecastWeatherList";
import useGeolocation from "./hooks/useGeolocation";
import {CityType, WeatherType} from "./types";

function App() {
  const {location, supported} = useGeolocation();
  const [cityId, setCityId] = useState<number>(-1);
  const [currentWeather, setCurrentWeather] = useState<WeatherType>();
  const [forecast, setForecast] = useState<WeatherType[]>();

  const setWeather = (weatherData: any) => {
    const {current, daily} = weatherData;

    setCurrentWeather(current);
    setForecast(daily.slice(0, 5));
  };

  const getWeatherByLocation = useCallback(() => {
    if (location?.latitude && location?.longitude) {
      api
        .getForectasByCoords(location?.latitude, location?.longitude)
        .then((res) => res.json())
        .then(setWeather);
    }
  }, [location?.latitude, location?.longitude]);

  useEffect(() => {
    if (supported && location !== undefined && cityId === -1) {
      getWeatherByLocation();
    } else if (!supported && cityId === -1) {
      // geo unsupported or disabled
      // set CABA as default
      setCityId(3433955);
    } else {
      api.getCityById(cityId).then((c: CityType | undefined) => {
        if (c) {
          api
            .getForectasByCoords(c?.latitude, c?.longitude)
            .then((res) => res.json())
            .then(setWeather);
        }
      });
    }
  }, [cityId, getWeatherByLocation, location, supported]);

  return (
    <>
      <CitySelector cityId={cityId} onCityChange={(e) => setCityId(e)} />
      {!currentWeather ? <div>Cargando...</div> : <CurrentWeatherCard current={currentWeather} />}
      {!forecast ? <div>Cargando...</div> : <ForecastWeatherList fore={forecast} />}
    </>
  );
}

export default App;
