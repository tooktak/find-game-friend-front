import styles from './Description.module.scss';

const Description = ({ children }: { children: string }) => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{children}</p>
    </div>
  );
};

export default Description;
