import Card from '@/components/Card/components';

type Props = {
  thumbnail?: string;
  title: string;
  kakaoLink: string;
  discordLink: string;
  content: string;
  remove: string;
};

const MyPostCard = ({
  thumbnail,
  title,
  kakaoLink,
  discordLink,
  content,
  remove,
}: Props) => {
  return (
    <Card>
      <Card.Thumbnail src={thumbnail} />
      <Card.Content>
        <Card.ContentHeader>
          <Card.Title>{title}</Card.Title>
          <Card.IconLinks kakao={kakaoLink} discord={discordLink} />
          <Card.RemoveLinks remove={remove} />
        </Card.ContentHeader>
        <Card.Description>{content}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default MyPostCard;
