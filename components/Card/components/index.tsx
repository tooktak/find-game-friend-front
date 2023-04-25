import { ReactNode } from 'react';
import styles from './index.module.scss';

import Thumbnail from './Thumbnail';
import Title from './Title';
import Hashtag, { HashtagContainer } from './Hashtag';
import IconLinks, { IconLinksContainer } from './IconLinks';
import Description, { DescriptionContainer } from './Description';
import ContentHeader from './ContentHeader';
import Content from './Content';
import RemoveLinks, {
  RemoveIconContainer,
} from '@/components/Card/components/RemoveLinks';

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.Thumbnail = Thumbnail;
Card.Title = Title;
Card.Description = Description;
Card.DescriptionContainer = DescriptionContainer;
Card.Hashtag = Hashtag;
Card.HashtagContainer = HashtagContainer;
Card.IconLinks = IconLinks;
Card.IconLinksContainer = IconLinksContainer;
Card.ContentHeader = ContentHeader;
Card.Content = Content;
Card.RemoveLinks = RemoveLinks;
Card.RemoveIconContainer = RemoveIconContainer;

export default Card;
