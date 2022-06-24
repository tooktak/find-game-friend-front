import styles from './Hashtag.module.scss';

const Hashtag = ({ children }: { children: string }) => {
  return <span className={styles.hashtag}>{children}</span>;
};

const Hashtags = ({ hashtags }: { hashtags: string[] }) => {
  return (
    <div className={styles.container}>
      {hashtags.map(hashtag => (
        <Hashtag key={hashtag}>{hashtag}</Hashtag>
      ))}
    </div>
  );
};

export default Hashtags;
