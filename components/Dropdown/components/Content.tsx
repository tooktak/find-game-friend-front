import { ReactNode } from 'react';
import styles from './Content.module.scss';

const Content = ({ children }: { children: ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
