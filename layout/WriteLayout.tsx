import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
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
import { TextInput } from '@/components/Input';
import useFormChange from '@/hooks/useFormChange';
import { Button } from '@/components/Button';
import { Hashtag } from '@/components/Chip';

const defaultValues = {
  title: '',
  contents: '',
  gameId: '',
  hashtag: [],
  kakaoLink: 'https://open.kakao.com/o/',
  discordLink: 'https://discord.gg/',
};

const WriteLayout = () => {
  const { register, handleSubmit, watch, setValue } = useForm<AddFindMatePost>({
    defaultValues,
  });
  const { title, contents, hashtag, kakaoLink, discordLink, gameId } = watch();
  const [thumbnail, setThumbnail] = useState('');
  const [form, onChange, setForm] = useFormChange({ newHashtag: '' });
  const { newHashtag } = form;

  const {
    isLoading,
    isError,
    data = [],
    error,
  } = useQuery<Game[], AxiosError>(QueryKeys.GAME, gameService.findAll);

  const onEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleAddHashtag();
    }
  };

  const handleAddHashtag = useCallback(() => {
    if (newHashtag.length < 1) {
      return alert('최소 한 글자 이상 입력하세요!');
    }
    if (hashtag.includes(newHashtag)) {
      return alert('중복된 태그입니다!');
    }
    setValue('hashtag', [...hashtag, newHashtag]);
    setForm({ newHashtag: '' });
  }, [hashtag, newHashtag, setForm, setValue]);

  const handleRemoveHashtag = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const { id } = e.currentTarget;
      setValue('hashtag', [
        ...hashtag.slice(0, Number(id)),
        ...hashtag.slice(Number(id) + 1),
      ]);
    },
    [hashtag, setValue],
  );

  const onSubmit: SubmitHandler<AddFindMatePost> = useCallback(data => {
    alert(JSON.stringify(data));
  }, []);

  // https://codiving.kr/61?category=551638
  // https://codesandbox.io/s/infallible-bush-c92l0?file=/src/App.tsx:384-397

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
          hashtags={hashtag || []}
          kakaoLink={kakaoLink}
          discordLink={discordLink}
        />
        <div className={styles.form}>
          <h1 className={styles.title}>글쓰기</h1>
          {hashtag && hashtag.length ? (
            <div className={styles.hashtagListWrapper}>
              {hashtag.map((element, idx) => (
                <Hashtag
                  key={element}
                  id={`${idx}`}
                  onClick={handleRemoveHashtag}
                >
                  {element}
                </Hashtag>
              ))}
            </div>
          ) : null}

          <div className={styles.hashtagFormWrapper}>
            <div className={styles.hashtagInput}>
              <TextInput
                name="newHashtag"
                placeholder="태그"
                value={newHashtag}
                onKeyPress={onEnterKeyPress}
                onChange={onChange}
              />
            </div>
            <Button color="main" onClick={handleAddHashtag}>
              추가
            </Button>
          </div>
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
