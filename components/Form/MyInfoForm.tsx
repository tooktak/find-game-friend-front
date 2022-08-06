import { useMutation } from 'react-query';

import { Button } from '@/components/Button';
import { TextInput } from '@/components/Input';
import memberService from '@/services/member';

import styles from './MyInfoForm.module.scss';
import { useLoginContext } from '@/context/Login';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { forwardRef, InputHTMLAttributes } from 'react';

interface ItemProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const MyInfoFormItem = forwardRef<HTMLInputElement, ItemProps>(
  ({ placeholder, ...rest }, ref) => (
    <section className={styles.container}>
      <label className={styles.label}>{placeholder}</label>
      <div className={styles.input}>
        <TextInput ref={ref} placeholder={placeholder} {...rest} />
      </div>
    </section>
  ),
);

MyInfoFormItem.displayName = 'MyInfoFormItem';

type Props = {
  register: UseFormRegister<MyInfo>;
  handleSubmit: UseFormHandleSubmit<MyInfo>;
};

const MyInfoForm = ({ register, handleSubmit }: Props) => {
  const { userInfo } = useLoginContext();
  const { id } = userInfo;

  const { mutate, isLoading, isError, data } = useMutation(
    memberService.update,
  );

  const onSubmit: SubmitHandler<MyInfo> = data => {
    mutate({ ...data, id });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyInfoFormItem placeholder="아이디" {...register('memberId')} />
      <MyInfoFormItem placeholder="이름" {...register('name')} />
      <MyInfoFormItem placeholder="닉네임" {...register('nickname')} />
      <MyInfoFormItem placeholder="이메일" {...register('email')} />
      <div className={styles.btnWrapper}>
        {data ? <span className={styles.success}>성공</span> : null}
        {isError ? <span className={styles.error}>실패</span> : null}
        <Button
          size="large"
          rounded={false}
          type="submit"
          color="main"
          disabled={isLoading}
        >
          수정
        </Button>
      </div>
    </form>
  );
};

export default MyInfoForm;
