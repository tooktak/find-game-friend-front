import {
  GridLayout,
  Layout,
  MobileOnlyLayout,
  SplitLayout,
} from '@/components/Layout';
import Main from '@/components/Main';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { QueryKeys } from '@/libs/client';
import findMatePostService from '@/services/findMatePost';
import Game from '@/services/game';
import {
  FindMatePostCard as SkeletonCard,
  SearchResult as SkeletonSearchResult,
} from '@/components/Skeleton';
import SearchForm from '@/components/Form/SearchForm';
import { SearchNotFound, SearchResult } from '@/components/Search';
import { FindMatePostCard } from '@/components/Card';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';

const MyPostLayout = () => {
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

  const jwtToken =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('userInfo')
      : null;
  const decodedToken: { sub?: string } | null = jwtToken
    ? jwtDecode(jwtToken)
    : null;
  const userId = decodedToken?.sub;

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

  const myPostInfo = PostData
    ? PostData.filter(e => e.memberId === userId)
    : [];

  const sortedmyPostInfo = [...(myPostInfo || [])].sort((a, b) => b.id - a.id);

  return (
    <Main>
      <SplitLayout
        left={<MyInfoMenu />}
        right={
          <div>
            내 글 목록
            <MobileOnlyLayout>
              <SearchForm />
            </MobileOnlyLayout>
            {myPostInfo && GameData && myPostInfo.length ? (
              <>
                <Layout>
                  <SearchResult data={myPostInfo} />
                </Layout>
                <GridLayout>
                  {sortedmyPostInfo.map(e => (
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
          </div>
        }
      />
    </Main>
  );
};

export default MyPostLayout;
