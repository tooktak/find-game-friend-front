import { ReactNode } from 'react';
import styles from './MobileOnlyLayout.module.scss';

const MobileOnlyLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default MobileOnlyLayout;
