import styles from './Hashtag.module.scss';

const Hashtag = ({ children }: { children: string }) => {
  return <span className={styles.hashtag}>{children}</span>;
};

export default Hashtag;
