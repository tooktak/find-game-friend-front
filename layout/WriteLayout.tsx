import { useEffect, useMemo, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { QueryKeys } from '@/libs/client';
import gameService from '@/services/game';
import Main from '@/components/Main';
import { FindMatePostCard as SkeletonCard } from '@/components/Skeleton';
import { FindMatePostCard } from '@/components/Card';
import { TextInput } from '@/components/Input';
import { GridLayout } from '@/components/Layout';
import Select from '@/components/Select';
import { Button } from '@/components/Button';
import MultilineInput from '@/components/Input/MultilineInput';

const defaultValues = {
  thumbnail: '',
  title: '',
  contents: '',
  gameId: '',
  hashtag: [],
  kakaoLink: 'https://open.kakao.com/o/',
  discordLink: 'https://discord.gg/',
};

type PostedFindMatePost = Omit<
  FindMatePost,
  'id' | 'latestPullUpDateTime' | 'memberId'
>;

const getGameSelectOptions = (gameData: Game[] | undefined) => {
  if (gameData && gameData.length) {
    return gameData.map(game => {
      const { id, title } = game;
      return { value: id, description: title };
    });
  }
  return [];
};

const WriteLayout = () => {
  const { control, handleSubmit, watch, setValue } = useForm({ defaultValues });
  const { title, contents, kakaoLink, discordLink, gameId } = watch();
  const [thumbnail, setThumbnail] = useState('');

  const { isLoading, isError, data, error } = useQuery<Game[], AxiosError>(
    QueryKeys.GAME,
    gameService.findAll,
  );

  const onSubmit: SubmitHandler<PostedFindMatePost> = data => {
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    if (!gameId && data && data.length) {
      const firstGameId = data[0].id;
      setValue('gameId', firstGameId);
    }
    if (gameId && data && data.length) {
      const gameIdx = data.findIndex(e => e.id === gameId);
      setThumbnail(data[gameIdx].thumbnailURL);
    }
  }, [data, gameId, setValue]);

  const selectOptions = useMemo(() => getGameSelectOptions(data), [data]);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Main>
      <GridLayout>
        <div
          style={{ gridColumn: '1', gridRow: '1', width: 'calc(960px / 4)' }}
        >
          {isLoading ? (
            <SkeletonCard />
          ) : (
            <FindMatePostCard
              thumbnail={thumbnail}
              title={title}
              content={contents}
              hashtags={['a', 'b', 'c']}
              kakaoLink={kakaoLink}
              discordLink={discordLink}
            />
          )}
        </div>
        <div style={{ gridColumn: '2 / 5', gridRow: '1' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextInput placeholder="제목을 입력하세요." {...field} />
              )}
            />
            <Controller
              name="contents"
              control={control}
              render={({ field }) => (
                <MultilineInput placeholder="내용을 입력하세요." {...field} />
              )}
            />
            <Controller
              name="gameId"
              control={control}
              render={({ field }) => (
                <Select {...field} option={selectOptions} />
              )}
            />
            <Controller
              name="kakaoLink"
              control={control}
              render={({ field }) => <TextInput {...field} />}
            />
            <Controller
              name="discordLink"
              control={control}
              render={({ field }) => <TextInput {...field} />}
            />
            <Button rounded type="submit">
              작성
            </Button>
          </form>
        </div>
      </GridLayout>
    </Main>
  );
};

export default WriteLayout;
