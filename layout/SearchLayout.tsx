import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { QueryKeys } from '@/libs/client';
import findMatePostService from '@/services/findMatePost';

import Main from '@/components/Main';
import { FindMatePostCard } from '@/components/Card';
import { GridLayout, Layout } from '@/components/Layout';
import { FindMatePostCard as Skeleton } from '@/components/Skeleton';

const SearchLayout = () => {
  const { query } = useRouter();
  const {
    category = 'title',
    q = '',
    page = '0',
    size = '10',
  } = query as {
    category: SearchCategory;
    q: string;
    page: string;
    size: string;
  };

  const { isLoading, isError, data, error } = useQuery<
    FindMatePost[],
    AxiosError
  >([QueryKeys.FIND_MATE_POST, category, q, page, size], () =>
    findMatePostService.search({
      category,
      q,
      page,
      size,
    }),
  );

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
      <Layout>
        <span>검색 결과가 없어요....... (´。＿。｀)</span>
      </Layout>
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

export default SearchLayout;
