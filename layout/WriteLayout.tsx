import { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';

import Main from '@/components/Main';
import { FindMatePostCard as SkeletonCard } from '@/components/Skeleton';
import { FindMatePostCard } from '@/components/Card';
import { GridLayout } from '@/components/Layout';
import WriteForm from '@/components/Form/WriteForm';

import { QueryKeys } from '@/libs/client';
import gameService from '@/services/game';
import styles from './WriteLayout.module.scss';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
const defaultValues = {
  title: '',
  contents: '',
  gameId: '',
  kakaoLink: '',
  discordLink: '',
};

const WriteLayout = () => {
  const { register, handleSubmit, watch, setValue } = useForm<
    Omit<AddFindMatePost, 'hashtag'>
  >({ defaultValues });
  const { title, contents, kakaoLink, discordLink, gameId } = watch();
  const [thumbnail, setThumbnail] = useState('');

  const router = useRouter();

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
    data = [],
    error,
  } = useQuery<Game[], AxiosError>(QueryKeys.GAME, gameService.findAll);

  const onSubmit: SubmitHandler<Omit<AddFindMatePost, 'hashtag'>> = useCallback(
    data => {
      const isCheck = confirm('작성하시겠습니까?');
      if (isCheck) {
        if (userId) {
          data.memberId = userId;
        }
        console.log(data);
        axios
          .post('http://localhost:8080/find-mate-post/create', data, {
            withCredentials: true,
          })
          .then(response => {
            console.log(response);
            router.back();
            // 성공적으로 데이터를 전송한 경우 실행할 코드를 작성합니다.
          })
          .catch(error => {
            console.log(error);
            // 데이터 전송에 실패한 경우 실행할 코드를 작성합니다.
          });
      }
    },
    [data, userId],
  );

  useEffect(() => {
    if (!gameId && data && data.length) {
      const firstGameId = data[0].id;
      setValue('gameId', firstGameId);
    }
    if (gameId && data && data.length) {
      const gameIdx = data.findIndex(e => e.id === Number(gameId));
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
