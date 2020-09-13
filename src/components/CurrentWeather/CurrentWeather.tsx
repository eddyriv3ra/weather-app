import React, { ReactElement } from 'react';
import { CurrentWeatherType } from 'types';
import Icon from 'components/Icon';
import convertToKmph from 'utils/utils';
import styles from './CurrentWeather.module.scss';

type CurrentWeatherTypes = {
  currentWeather: CurrentWeatherType | undefined;
};

const CurrentWeather = ({
  currentWeather,
}: CurrentWeatherTypes): ReactElement => {
  const tempStyles = [styles.items, styles.temp].join(' ');
  const additionalInfoStyles = [styles.items, styles.additionalInfo].join(' ');
  const iconStyles = [styles.items, styles.icon].join(' ');

  const wiidSpeed = convertToKmph(currentWeather?.wind_speed || 0);

  return (
    <div className={styles.itemsContainer}>
      <div className={iconStyles}>
        <Icon code={currentWeather?.weather[0]?.icon} />
        <h2 className={styles.description}>
          {currentWeather?.weather[0]?.description}
        </h2>
      </div>
      <div className={tempStyles}>{`${currentWeather?.temp.toFixed(1)}º`}</div>
      <div className={additionalInfoStyles}>
        <p>{`Wind: ${wiidSpeed} kmph`}</p>
        <p>{`Feels Like: ${currentWeather?.feels_like.toFixed(1)}º`}</p>
        <p>{`Pressure: ${currentWeather?.pressure} hPa`}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
