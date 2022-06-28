import { ReactNode } from 'react';
import styles from './Menu.module.scss';

const Menu = ({ children }: { children: ReactNode }) => {
  return <div className={styles.menu}>{children}</div>;
};

export default Menu;
