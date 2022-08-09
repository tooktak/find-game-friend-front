import styles from './Text.module.scss';

const Text = ({ children }: { children: string }) => {
  return <span className={styles.text}>{children}</span>;
};

export default Text;
