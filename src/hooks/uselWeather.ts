import { QueryResult, useQuery } from 'react-query';
import getweatherService from 'services/weatherAPI';
import { weatherType, CoordType, CurrentWeatherType } from 'types';

type LocalWeatherResult = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherType;
  daily: weatherType[];
  status: 'loading';
};

const useLocalWeather = (
  location: CoordType,
): QueryResult<LocalWeatherResult> => {
  return useQuery(['local-weather', location], getweatherService);
};

export default useLocalWeather;
