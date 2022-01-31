export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface City {
  id: number;
  name: string;
  latitude: Coordinates["latitude"];
  longitude: Coordinates["longitude"];
}
