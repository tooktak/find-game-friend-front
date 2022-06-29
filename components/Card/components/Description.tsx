import { ReactNode } from 'react';
import styles from './Description.module.scss';

export const DescriptionContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

const Description = ({ children }: { children: string }) => {
  return (
    <DescriptionContainer>
      <p className={styles.description}>{children}</p>
    </DescriptionContainer>
  );
};

export default Description;
