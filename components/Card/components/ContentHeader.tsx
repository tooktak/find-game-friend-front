import { ReactNode } from 'react';
import styles from './ContentHeader.module.scss';

const ContentHeader = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContentHeader;
