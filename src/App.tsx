import React, { ReactElement, useState } from 'react';
import Card from 'components/Card';
import Container from 'components/Container';
import useWeather from 'hooks/uselWeather';
import useGeoLocation from 'hooks/useGeoLocation';
import CurrentWeather from 'components/CurrentWeather';
import Select from 'components/Select';
import { weatherType, CityType, CoordType } from 'types';
import citiesList from 'mockData/citiesList';
import styles from './App.module.scss';

const App = (): ReactElement => {
  const { location = { latitude: 0, longitude: 0 } } = useGeoLocation();
  const [selectedCoord, setSelectedCoord] = useState<CoordType | undefined>(
    undefined,
  );
  const { data, status } = useWeather(selectedCoord || location);
  const dailyData = data?.daily.slice(1, -2);

  const title = data?.timezone.split('/').join(' ');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedCityId = parseInt(e.target.value, 10);
    const cityData = citiesList.find(
      (city: CityType) => city.id === selectedCityId,
    );
    setSelectedCoord(cityData?.coord);
  };

  return (
    <div className={styles.app}>
      <Select
        options={citiesList}
        title="Select a city"
        onChange={handleSelect}
      />
      <Container isLoading={status === ('loading' || 'error')}>
        <h1 className={styles.titleLocation}>{title}</h1>
        <CurrentWeather currentWeather={data?.current} />
        <div className={styles.dailyContainer}>
          {dailyData?.map((day: weatherType) => (
            <Card key={day.dt} data={day} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default App;
