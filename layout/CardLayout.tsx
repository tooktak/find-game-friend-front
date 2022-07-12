import { FindMatePostCard } from '@/components/Card';
import { GridLayout, MobileOnlyLayout } from '@/components/Layout';
import Main from '@/components/Main';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { QueryKeys } from '@/libs/client';
import findMatePostService from '@/services/findMatePost';
import { FindMatePostCard as Skeleton } from '@/components/Skeleton';
import SearchForm from '@/components/Form/SearchForm';

const CardLayout = () => {
  const { isLoading, isError, data, error } = useQuery<
    FindMatePost[],
    AxiosError
  >(QueryKeys.FIND_MATE_POST, findMatePostService.findAll);

  if (isLoading) {
    return (
      <Main>
        <GridLayout>
          {new Array(16).fill(0).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </GridLayout>
      </Main>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Main>
      <MobileOnlyLayout>
        <SearchForm />
      </MobileOnlyLayout>
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
