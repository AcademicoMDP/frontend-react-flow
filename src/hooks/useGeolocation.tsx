import React, {useEffect, useState} from "react";

import {CoordinatesType} from "../types";

const useGeolocation = () => {
  const [supported, setSupported] = useState(true);
  const [location, setLocation] = useState<CoordinatesType | undefined>();

  useEffect(() => {
    if (!navigator.geolocation) {
      setSupported(false);

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setLocation({latitude, longitude});
      },
      (error) => {
        console.log(error);
        setSupported(false);
      },
    );
  }, []);

  return {location, supported};
};

export default useGeolocation;
