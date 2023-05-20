import {
  GridLayout,
  Layout,
  MobileOnlyLayout,
  SplitLayout,
} from '@/components/Layout';
import Main from '@/components/Main';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { QueryKeys } from '@/libs/client';
import findMatePostService from '@/services/findMatePost';
import Game from '@/services/game';
import {
  FindMatePostCard as SkeletonCard,
  SearchResult as SkeletonSearchResult,
} from '@/components/Skeleton';
import SearchForm from '@/components/Form/SearchForm';
import { SearchNotFound, SearchResult } from '@/components/Search';
import jwtDecode from 'jwt-decode';
import MyPostCard from '@/components/Card/MyPostCard';
import { Button } from '@/components/Button';

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

  const sortedmyPostInfo = [...(myPostInfo || [])].sort(
    (a, b) => parseInt(b.id) - parseInt(a.id),
  );

  const removeMyCardAll = () => {
    const isCheck = confirm('모두 삭제 하시겠습니까?');
    if (isCheck !== undefined) {
      axios
        .delete('https://api.aribomy.com/find-mate-post/deleteAll', {
          withCredentials: true,
        })
        .then(response => {
          location.href = '/mypost';
          //성공적으로 데이터 전송
        })
        .catch(error => {
          console.log(error);
          //데이터 전송 실패
        });
    }
  };

  return (
    <Main>
      <SplitLayout
        left={<MyInfoMenu />}
        right={
          <div>
            내 글 목록
            <br />
            <br />
            <Button onClick={removeMyCardAll}>전체 삭제</Button>
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
                    <MyPostCard
                      key={e.id}
                      thumbnail={gameThumbnail[Number(e.gameId) - 1]}
                      title={e.title}
                      kakaoLink={e.kakaoLink}
                      discordLink={e.discordLink}
                      content={e.contents}
                      remove={e.id}
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
