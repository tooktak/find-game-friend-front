import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { TextInput } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { MultilineInput } from '@/components/Input';

import styles from './WriteForm.module.scss';
import findMatePostService from '@/services/findMatePost';
import { useMutation } from 'react-query';
import { useLoginContext } from '@/context/Login';

type Props = {
  data: Game[];
  register: UseFormRegister<AddFindMatePost>;
  handleSubmit: UseFormHandleSubmit<AddFindMatePost>;
};

const getGameSelectOptions = (gameData: Game[] | undefined) => {
  if (gameData && gameData.length) {
    return gameData.map(game => {
      const { id, title } = game;
      return { value: id, description: title };
    });
  }
  return [];
};
const WriteForm = ({ data, register, handleSubmit }: Props) => {
  const router = useRouter();
  const selectOptions = useMemo(() => getGameSelectOptions(data), [data]);

  const { userInfo } = useLoginContext();
  const { id } = userInfo;

  const { mutate, isLoading } = useMutation(findMatePostService.create, {
    onSuccess: data => {
      alert('게시글이 작성되었습니다!');
      console.log(data);
      router.push('/');
    },
  });

  const onSubmit: SubmitHandler<AddFindMatePost> = useCallback(
    data => {
      mutate({ ...data, memberId: id });
    },
    [id, mutate],
  );

  const onCancel = useCallback(() => {
    const isCheck = confirm('정말 돌아가시겠습니까?');
    if (isCheck) {
      router.back();
    }
  }, [router]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        bold
        placeholder="제목"
        {...register('title', { required: true })}
      />
      <MultilineInput
        placeholder="내용"
        {...register('contents', { required: true })}
      />
      <Select {...register('gameId')} option={selectOptions} />
      <TextInput
        placeholder="kakaotalk"
        {...register('kakaoLink', { required: true })}
      />
      <TextInput
        placeholder="discord"
        {...register('discordLink', { required: true })}
      />
      <div className={styles.btnWrapper}>
        <Button size="large" color="sub" onClick={onCancel}>
          취소
        </Button>
        <Button size="large" type="submit" color="main" disabled={isLoading}>
          작성
        </Button>
      </div>
    </form>
  );
};

export default WriteForm;
