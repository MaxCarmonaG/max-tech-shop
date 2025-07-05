import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';

const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  className = '',
  children,
}) => {
  const classes = `${styles.container} ${className}`.trim();
  return <div className={classes}>{children}</div>;
};

export default Container;
