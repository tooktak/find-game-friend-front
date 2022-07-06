import { ReactNode } from 'react';
import styles from './SplitLayout.module.scss';

const SplitLayout = ({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

export default SplitLayout;
