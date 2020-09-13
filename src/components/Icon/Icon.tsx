import React, { ReactElement } from 'react';

type PropsType = {
  code: string | undefined;
};

const Icon = ({ code }: PropsType): ReactElement => {
  const url = `http://openweathermap.org/img/wn/${code}@4x.png`;
  return <img src={url} alt="icon" />;
};

export default Icon;
