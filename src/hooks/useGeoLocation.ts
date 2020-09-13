import { useState, useEffect } from 'react';
import { CoordType } from 'types';

type CoordsType = {
  coords: CoordType;
};

const useCurrentLocation = () => {
  const [location, setLocation] = useState<CoordType>({
    latitude: 0,
    longitude: 0,
  });

  const handleSuccess = (pos: CoordsType) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  useEffect(() => {
    const getPosition = async () => {
      const { geolocation } = navigator;
      const position = await geolocation.getCurrentPosition(handleSuccess);
      return position;
    };
    getPosition();
  }, []);

  return { location };
};

export default useCurrentLocation;
