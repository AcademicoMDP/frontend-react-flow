import React, {useEffect, useState} from "react";

import {Coordinates} from "../types";

const useGeolocation = () => {
  const [supported, setSupported] = useState(true);
  const [location, setLocation] = useState<Coordinates | undefined>();

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
      (_) => setSupported(false),
    );
  }, []);

  return {location, supported};
};

export default useGeolocation;
