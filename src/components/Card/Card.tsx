import React, { ReactElement } from 'react';
import { weatherType } from 'types';
import Icon from 'components/Icon';
import moment from 'moment';
import styles from './Card.module.scss';

type DataType = {
  data: weatherType;
};

const Card = ({ data }: DataType): ReactElement => {
  return (
    <div className={styles.card}>
      <h1>{moment.unix(data.dt).format('dddd')}</h1>
      <Icon code={data.weather[0].icon} />
      <div className={styles.temps}>
        <div>
          <h3>Max</h3>
          <p>{`${data.temp.min}º`}</p>
        </div>
        <div>
          <h3>Min</h3>
          <p>{`${data.temp.max}º`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
