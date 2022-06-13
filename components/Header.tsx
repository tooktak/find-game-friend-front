import type { ReactNode } from 'react';
import styles from './Header.module.css';

const Header = ({
  left,
  center,
  right,
}: {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>{left}</div>
        <div className={styles.center}>{center}</div>
        <div className={styles.right}>{right}</div>
      </nav>
    </header>
  );
};

export default Header;
