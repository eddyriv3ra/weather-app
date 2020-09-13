import { useState, useEffect } from 'react';
import { CoordType } from 'types';

type CoordsType = {
  coords: CoordType;
};

const useCurrentLocation = () => {
  const [location, setLocation] = useState<CoordType>();

  const handleSuccess = (pos: CoordsType) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  useEffect(() => {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(handleSuccess);
  }, []);

  return { location };
};

export default useCurrentLocation;
