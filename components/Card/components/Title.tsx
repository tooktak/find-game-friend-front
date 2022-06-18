import styles from './Title.module.scss';

const Title = ({ children }: { children: string }) => {
  return <h3 className={styles.title}>{children}</h3>;
};

export default Title;
