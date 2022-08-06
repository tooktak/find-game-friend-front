import { useRouter } from 'next/router';
import { FormEventHandler, useCallback, useMemo } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextInput } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { MultilineInput } from '@/components/Input';

import styles from './WriteForm.module.scss';

type Props = {
  data: Game[];
  register: UseFormRegister<Omit<AddFindMatePost, 'hashtag'>>;
  onSubmit: FormEventHandler<HTMLFormElement>;
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
const WriteForm = ({ data, register, onSubmit }: Props) => {
  const router = useRouter();
  const selectOptions = useMemo(() => getGameSelectOptions(data), [data]);

  const onCancel = useCallback(() => {
    const isCheck = confirm('정말 돌아가시겠습니까?');
    if (isCheck) {
      router.back();
    }
  }, [router]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
        <Button color="sub" rounded onClick={onCancel}>
          취소
        </Button>
        <Button type="submit" color="main" rounded>
          작성
        </Button>
      </div>
    </form>
  );
};

export default WriteForm;
