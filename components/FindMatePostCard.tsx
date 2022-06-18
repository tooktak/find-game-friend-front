import Card from './Card';

type Props = {
  thumbnail: string;
  title: string;
  kakaoLink: string;
  discordLink: string;
  content: string;
  hashtags: string[];
};
import styles from './FindMatePostCard.module.scss';

const FindMatePostCard = ({
  thumbnail,
  title,
  kakaoLink,
  discordLink,
  content,
  hashtags,
}: Props) => {
  return (
    <Card>
      <div>
        <Card.Thumbnail src={thumbnail} />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.header}>
          <Card.Title>{title}</Card.Title>
          <div className={styles.link}>
            <Card.KakaoLink link={kakaoLink} />
            <Card.DiscordLink link={discordLink} />
          </div>
        </div>
        <div className={styles.content}>
          <Card.Content>{content}</Card.Content>
        </div>
        <div className={styles.hashtag}>
          {hashtags.map(hashtag => (
            <Card.Hashtag key={hashtag}>{hashtag}</Card.Hashtag>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FindMatePostCard;
