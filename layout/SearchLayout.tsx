import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { QueryKeys } from '@/libs/client';
import findMatePostService from '@/services/findMatePost';

import Main from '@/components/Main';
import { FindMatePostCard } from '@/components/Card';
import { GridLayout, Layout, MobileOnlyLayout } from '@/components/Layout';
import {
  FindMatePostCard as SkeletonCard,
  SearchResult as SkeletonSearchResult,
} from '@/components/Skeleton';
import { SearchResult, SearchNotFound } from '@/components/Search';
import SearchForm from '@/components/Form/SearchForm';

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
        <Layout>
          <SkeletonSearchResult />
        </Layout>
        <GridLayout>
          {new Array(16).fill(0).map((_, i) => (
            <SkeletonCard key={i} />
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
      {data && data.length ? (
        <>
          <Layout>
            <SearchResult data={data} />
          </Layout>
          <GridLayout>
            {data.map(e => (
              <FindMatePostCard
                key={e.id}
                thumbnail="/maplestory.jpg"
                title={e.title}
                kakaoLink={e.kakaoLink}
                discordLink={e.discordLink}
                content={e.contents}
                hashtags={e.hashtag}
              />
            ))}
          </GridLayout>
        </>
      ) : (
        <Layout>
          <SearchNotFound />
        </Layout>
      )}
    </Main>
  );
};

export default SearchLayout;
