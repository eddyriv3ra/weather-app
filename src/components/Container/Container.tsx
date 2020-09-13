import React, { ReactElement, ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
  isLoading: boolean;
};

const Container = ({ children, isLoading }: ContainerProps): ReactElement => {
  const loadingStyle = [styles.container, styles['lds-dual-ring']].join(' ');

  if (isLoading) return <div className={loadingStyle} />;

  return <div className={styles.container}>{children}</div>;
};

export default Container;
