import React, {useCallback, useEffect, useState} from "react";

import {api} from "./api";
import "./App.css";
import CitySelector from "./components/CitySelector";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastWeatherList from "./components/ForecastWeatherList";
import Loading from "./components/Loading";
import useGeolocation from "./hooks/useGeolocation";
import {CityType, WeatherType} from "./types";

function App() {
  const {location, supported} = useGeolocation();
  const [cityId, setCityId] = useState<number>(-1);
  const [currentWeather, setCurrentWeather] = useState<WeatherType>();
  const [forecast, setForecast] = useState<WeatherType[]>();
  const [isLoading, setIsloading] = useState(true);

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
        .then(setWeather)
        .finally(() => setIsloading(false));
    }
  }, [location?.latitude, location?.longitude]);

  const handleCityChange = (e: number) => {
    setCityId(e);
  };

  useEffect(() => {
    setIsloading(true);
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
            .then(setWeather)
            .finally(() => setIsloading(false));
        }
      });
    }
  }, [cityId, getWeatherByLocation, location, supported]);

  return (
    <div className="container">
      <CitySelector cityId={cityId} onCityChange={(e) => handleCityChange(e)} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!currentWeather ? (
            <div>Cargando...</div>
          ) : (
            <CurrentWeatherCard current={currentWeather} />
          )}
          {!forecast ? <div>Cargando...</div> : <ForecastWeatherList fore={forecast} />}
        </>
      )}
    </div>
  );
}

export default App;
