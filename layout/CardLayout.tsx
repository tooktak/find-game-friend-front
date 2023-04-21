import { FindMatePostCard } from '@/components/Card';
import { GridLayout, MobileOnlyLayout } from '@/components/Layout';
import Main from '@/components/Main';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { QueryKeys } from '@/libs/client';
import findMatePostService from '@/services/findMatePost';
import { FindMatePostCard as Skeleton } from '@/components/Skeleton';
import SearchForm from '@/components/Form/SearchForm';
import Game from '@/services/game';

const CardLayout = () => {
  const {
    isLoading,
    isError,
    data: PostData,
    error,
  } = useQuery<FindMatePost[], AxiosError>(
    QueryKeys.FIND_MATE_POST,
    findMatePostService.findAll,
  );
  const { data: GameData } = useQuery<Game[], AxiosError>(
    QueryKeys.GAME,
    Game.findAll,
  );
  const gameThumbnail = GameData ? GameData.map(e => e.thumbnailURL) : [];
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

  const sortedPostData = [...(PostData || [])].sort((a, b) => b.id - a.id);

  return (
    <Main>
      <MobileOnlyLayout>
        <SearchForm />
      </MobileOnlyLayout>
      <GridLayout>
        {PostData && GameData && PostData.length
          ? sortedPostData.map(e => (
              <FindMatePostCard
                key={e.id}
                thumbnail={gameThumbnail[Number(e.gameId) - 1]}
                title={e.title}
                kakaoLink={e.kakaoLink}
                discordLink={e.discordLink}
                content={e.contents}
              />
            ))
          : ''}
      </GridLayout>
    </Main>
  );
};

export default CardLayout;
