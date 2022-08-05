import { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import Main from '@/components/Main';
import { FindMatePostCard as SkeletonCard } from '@/components/Skeleton';
import { FindMatePostCard } from '@/components/Card';
import { GridLayout } from '@/components/Layout';
import WriteForm from '@/components/Form/WriteForm';

import { QueryKeys } from '@/libs/client';
import gameService from '@/services/game';
import styles from './WriteLayout.module.scss';

const defaultValues = {
  title: '',
  contents: '',
  gameId: '',
  kakaoLink: 'https://open.kakao.com/o/',
  discordLink: 'https://discord.gg/',
};

const WriteLayout = () => {
  const { register, handleSubmit, watch, setValue } = useForm<
    Omit<AddFindMatePost, 'hashtag'>
  >({ defaultValues });
  const { title, contents, kakaoLink, discordLink, gameId } = watch();
  const [thumbnail, setThumbnail] = useState('');
  const [hashtag] = useState<string[]>([]);

  const {
    isLoading,
    isError,
    data = [],
    error,
  } = useQuery<Game[], AxiosError>(QueryKeys.GAME, gameService.findAll);

  const onSubmit: SubmitHandler<Omit<AddFindMatePost, 'hashtag'>> = useCallback(
    data => {
      alert(JSON.stringify(data));
    },
    [],
  );

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

  if (isLoading) {
    return (
      <Main>
        <GridLayout>
          <div className={styles.card}>
            <SkeletonCard />
          </div>
        </GridLayout>
      </Main>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Main>
      <GridLayout>
        <FindMatePostCard
          thumbnail={thumbnail}
          title={title}
          content={contents}
          hashtags={hashtag}
          kakaoLink={kakaoLink}
          discordLink={discordLink}
        />
        <div className={styles.form}>
          <h1 className={styles.title}>글쓰기</h1>
          <WriteForm
            data={data}
            register={register}
            onSubmit={handleSubmit(onSubmit)}
          />
        </div>
      </GridLayout>
    </Main>
  );
};

export default WriteLayout;
