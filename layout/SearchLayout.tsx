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
import Game from '@/services/game';

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

  const {
    isLoading,
    isError,
    data: PostData,
    error,
  } = useQuery<FindMatePost[], AxiosError>(
    [QueryKeys.FIND_MATE_POST, category, q, page, size],
    () =>
      findMatePostService.search({
        category,
        q,
        page,
        size,
      }),
  );
  const { data: GameData } = useQuery<Game[], AxiosError>(
    QueryKeys.GAME,
    Game.findAll,
  );

  const gameThumbnail = (GameData || []).map(e => e.thumbnailURL);
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

  const sortedSearchData = [...(PostData || [])].sort((a, b) => b.id - a.id);

  return (
    <Main>
      <MobileOnlyLayout>
        <SearchForm />
      </MobileOnlyLayout>
      {PostData && GameData && PostData.length ? (
        <>
          <Layout>
            <SearchResult data={PostData} />
          </Layout>
          <GridLayout>
            {sortedSearchData.map(e => (
              <FindMatePostCard
                key={e.id}
                thumbnail={gameThumbnail[Number(e.gameId) - 1]}
                title={e.title}
                kakaoLink={e.kakaoLink}
                discordLink={e.discordLink}
                content={e.contents}
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
