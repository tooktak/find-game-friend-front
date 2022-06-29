import Skeleton from './components';
import Card from '@/components/Card/components/index';

const FindMatePostCard = () => {
  return (
    <Card>
      <Skeleton.Image type="thumbnail" />
      <Card.Content>
        <Skeleton.Text size="large" />
        <Card.DescriptionContainer>
          <Skeleton.Text />
          <Skeleton.Text />
          <Skeleton.Text />
        </Card.DescriptionContainer>
        <Card.HashtagContainer>
          <Skeleton.Text size="small" />
        </Card.HashtagContainer>
      </Card.Content>
    </Card>
  );
};

export default FindMatePostCard;
