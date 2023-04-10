import { FindMatePostCard } from '@/components/Card';
import { GridLayout, MobileOnlyLayout } from '@/components/Layout';
import Main from '@/components/Main';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { QueryKeys } from '@/libs/client';
import findMatePostService from '@/services/findMatePost';
import { FindMatePostCard as Skeleton } from '@/components/Skeleton';
import SearchForm from '@/components/Form/SearchForm';
import { useEffect, useState } from 'react';
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
  const [game, setGame] = useState<string[]>([]);

  useEffect(() => {
    if (!GameData || !PostData) {
      console.error(error);
    } else {
      const gameIds = PostData.map(e => e.gameId); //data에서 gameId만추출
      const thumbnails: string[] = [];
      gameIds.forEach(id => {
        const gameIndex = GameData.findIndex(e => e.id === Number(id));
        console.log(gameIndex);
        thumbnails.push(GameData[gameIndex].thumbnailURL);
      });
      setGame(thumbnails);
    }
  }, [PostData, GameData]);
  /*const [game, setGame] = useState('');
  useEffect(() => {
    if (!GameData || !PostData) {
      console.error(error);
    } else {
      const gameIds = PostData.map(e => e.gameId); //data에서 gameId만추출
      const gameThumbnails = gameIds.map(id => {
        const gameIndex = GameData.findIndex(e => e.id === parseInt(id));
        return GameData[gameIndex].thumbnailURL;
      });
      console.log(gameThumbnails);
      setGame(gameThumbnails);
    }
  }, [PostData, GameData]);*/

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
        {PostData && GameData && PostData.length
          ? PostData.map(e => (
              <FindMatePostCard
                key={e.id}
                thumbnail={game[Number(e.gameId) - 1]}
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
