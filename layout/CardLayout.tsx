import FindMatePostCard from '@/components/FindMatePostCard';
import GridLayout from '@/components/GridLayout';
import Main from '@/components/Main';
import { useQuery } from 'react-query';
import { QueryKeys } from '@/libs/client';
import findMatePostService from '@/services/findMatePost';

const CardLayout = () => {
  const { data } = useQuery<FindMatePost[]>(
    QueryKeys.FIND_MATE_POST,
    findMatePostService.findAll,
  );

  return (
    <Main>
      <GridLayout>
        {data && data.length
          ? data.map(e => (
              <FindMatePostCard
                key={e.id}
                thumbnail="/test3.jpg"
                title={e.title}
                kakaoLink={e.kakaoLink}
                discordLink={e.discordLink}
                content={e.contents}
                hashtags={e.hashtag}
              />
            ))
          : ''}
      </GridLayout>
    </Main>
  );
};

export default CardLayout;
