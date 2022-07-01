import Skeleton from './components';
import Card from '@/components/Card/components/index';

const FindMatePostCard = () => {
  return (
    <Card>
      <Skeleton.Image type="thumbnail" />
      <Card.Content>
        <Card.ContentHeader>
          <Skeleton.Text size="large" width="half" />
          <Card.IconLinksContainer>
            <Skeleton.Icon type="iconLink" />
            <Skeleton.Icon type="iconLink" />
          </Card.IconLinksContainer>
        </Card.ContentHeader>
        <Card.DescriptionContainer>
          <Skeleton.Text />
          <Skeleton.Text width="threeQuarter" />
          <Skeleton.Text width="half" />
        </Card.DescriptionContainer>
        <Card.HashtagContainer>
          <Skeleton.Text size="small" width="quarter" />
          <Skeleton.Text size="small" width="quarter" />
          <Skeleton.Text size="small" width="quarter" />
        </Card.HashtagContainer>
      </Card.Content>
    </Card>
  );
};

export default FindMatePostCard;
