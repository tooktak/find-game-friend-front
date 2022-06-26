import { ReactNode } from 'react';
import styles from './index.module.scss';

import Thumbnail from './Thumbnail';
import Title from './Title';
import Hashtag from './Hashtag';
import IconLinks from './IconLinks';
import Description from './Description';
import ContentHeader from './ContentHeader';
import Content from './Content';

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
