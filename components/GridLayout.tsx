import { ReactNode } from 'react';
import styles from './GridLayout.module.scss';

const GridLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default GridLayout;
