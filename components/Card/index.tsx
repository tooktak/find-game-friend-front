import { ReactNode } from 'react';
import styles from './Card.module.scss';
import {
  Thumbnail,
  Title,
  Content,
  Hashtag,
  KakaoLink,
  DiscordLink,
} from './components';

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.Thumbnail = Thumbnail;
Card.Title = Title;
Card.Content = Content;
Card.Hashtag = Hashtag;
Card.KakaoLink = KakaoLink;
Card.DiscordLink = DiscordLink;

export default Card;
