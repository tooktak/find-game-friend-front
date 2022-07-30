import { useRouter } from 'next/router';
import { FormEventHandler, useCallback, useMemo } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInput } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { MultilineInput } from '@/components/Input';

import styles from './WriteForm.module.scss';

type Props = {
  data: Game[];
  control: Control<AddFindMatePost, object>;
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
const WriteForm = ({ data, control, onSubmit }: Props) => {
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
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextInput bold placeholder="제목을 입력하세요." {...field} />
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
        render={({ field }) => <Select {...field} option={selectOptions} />}
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
