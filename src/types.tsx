export interface CoordinatesType {
  latitude: number;
  longitude: number;
}

export interface CityType {
  id: number;
  name: string;
  latitude: CoordinatesType["latitude"];
  longitude: CoordinatesType["longitude"];
}

type TempType = {min: number; max: number};

export interface WeatherType {
  dt: number;
  temp: TempType;
  feels_like: TempType;
  wind_speed: number;
  weather: [
    {
      icon: string;
      description: string;
    },
  ];
}
