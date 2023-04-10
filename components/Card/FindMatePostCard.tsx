import Card from './components';

type Props = {
  thumbnail?: string;
  title: string;
  kakaoLink: string;
  discordLink: string;
  content: string;
};

const FindMatePostCard = ({
  thumbnail,
  title,
  kakaoLink,
  discordLink,
  content,
}: Props) => {
  return (
    <Card>
      <Card.Thumbnail src={thumbnail} />
      <Card.Content>
        <Card.ContentHeader>
          <Card.Title>{title}</Card.Title>
          <Card.IconLinks kakao={kakaoLink} discord={discordLink} />
        </Card.ContentHeader>
        <Card.Description>{content}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default FindMatePostCard;
