import demo from "../mock";
import {CityType} from "../types";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

const API_URL = `https://api.openweathermap.org/data/2.5/onecall?units=metric&lang=es&exclude=minutely,hourly,alerts&appid=${API_KEY}`;

const CIUDADES: CityType[] = [
  {id: 3433955, name: "CABA", latitude: -34.599998, longitude: -58.450001},
  {id: 3860259, name: "Córdoba", latitude: -31.4135, longitude: -64.181053},
  {id: 3430863, name: "Mar del Plata", latitude: -38.002281, longitude: -57.557541},
  {id: 3429971, name: "Pinamar", latitude: -37.107941, longitude: -56.861401},
  {id: 3835869, name: "Santiago del Estero", latitude: -27.795111, longitude: 64.26149},
];

const api = {
  getCityById: async (id: number) => CIUDADES.find((city) => city.id == id),
  getForectasByCoords: async (lat: number, lon: number) => {
    const res = await fetch(`${API_URL}&lat=${lat}&lon=${lon}`);

    return res;
  },
  getDemoData: () => new Promise((resolve, _) => resolve(demo)),
};

export {api, CIUDADES};
