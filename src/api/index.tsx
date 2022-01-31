import demo from "../mock";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

const API_URL = `http://api.openweathermap.org/data/2.5/onecall?units=metric&lang=es&exclude=minutely,hourly,alerts&appid=${API_KEY}`;

/** CUIDADES */
/*
  "id": 3430863, "name": "Mar del Plata"
  "id": 3427431, "name": "Villa Gesell",
  "id": 3429971, "name": "Pinamar",
  "id": 3433955, "name": "Ciudad Autónoma de Buenos Aires",
  "id": 3860259, "name": "Córdoba",
*/

const CIUDADES = [
  {id: 3433955, name: "CABA", lat: -34.599998, long: -58.450001},
  {id: 3860259, name: "Córdoba", lat: -31.4135, long: -64.181053},
  {id: 3430863, name: "Mar del Plata", lat: -38.002281, long: -57.557541},
  {id: 3429971, name: "Pinamar", lat: -37.107941, long: -56.861401},
  {id: 3835869, name: "Santiago del Estero", lat: -27.795111, long: 64.26149},
];

const api = {
  getCityById: async (id: number) => CIUDADES.find((city) => city.id == id),
  getForectasByCoords: async (lat: number, lon: number) => {
    const res = await fetch(`${API_URL}&lat=${lat}&lon=${lon}`);

    return res;
  },
  getDemoData: () => new Promise((resolve, reject) => resolve(demo)),
};

export {api, CIUDADES};
