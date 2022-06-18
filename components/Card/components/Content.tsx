import styles from './Content.module.scss';
const Content = ({ children }: { children: string }) => {
  return <p className={styles.content}>{children}</p>;
};

export default Content;
