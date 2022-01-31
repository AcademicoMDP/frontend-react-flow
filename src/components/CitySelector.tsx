import React from "react";

import {CIUDADES} from "../api";

import style from "./CitySelector.module.css";

interface Props {
  cityId: number;
  onCityChange: (e: number) => void;
}

const CitySelector: React.FC<Props> = ({cityId, onCityChange}) => {
  return (
    <div className={style.container}>
      <select
        className={style.select}
        name="city"
        value={cityId}
        onChange={(e) => onCityChange(parseInt(e.target.value))}
      >
        <option value="-1">Mi Ubicación</option>
        {CIUDADES.map((city) => (
          <option key={city.id} label={city.name} value={city.id} />
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
