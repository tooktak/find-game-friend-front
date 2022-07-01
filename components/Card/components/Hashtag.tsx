import { ReactNode } from 'react';
import styles from './Hashtag.module.scss';

export const HashtagContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export const Hashtag = ({ children }: { children: string }) => {
  return <span className={styles.hashtag}>{children}</span>;
};

const Hashtags = ({ hashtags }: { hashtags: string[] }) => {
  return (
    <HashtagContainer>
      {hashtags.map(hashtag => (
        <Hashtag key={hashtag}>{hashtag}</Hashtag>
      ))}
    </HashtagContainer>
  );
};

export default Hashtags;
