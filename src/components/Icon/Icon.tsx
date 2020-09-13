import React, { ReactElement } from 'react';

type PropsType = {
  code: string | undefined;
};

const Icon = ({ code }: PropsType): ReactElement => {
  const url = `http://openweathermap.org/img/wn/${code}@4x.png`;
  return (
    <div>
      <img src={url} alt="icon" />
    </div>
  );
};

export default Icon;
