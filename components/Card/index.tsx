import { ReactNode } from 'react';
import styles from './Card.module.scss';
import {
  Thumbnail,
  Title,
  Description,
  Hashtag,
  IconLinks,
  ContentHeader,
  Content,
} from './components';

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.Thumbnail = Thumbnail;
Card.Title = Title;
Card.Description = Description;
Card.Hashtag = Hashtag;
Card.IconLinks = IconLinks;
Card.ContentHeader = ContentHeader;
Card.Content = Content;

export default Card;
