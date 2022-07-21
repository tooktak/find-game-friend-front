import { ChangeEvent, FormEvent, useCallback } from 'react';
import { useMutation } from 'react-query';

import { Button } from '@/components/Button';
import { TextInput, TextInputProps } from '@/components/Input';
import memberService from '@/services/member';

import styles from './MyInfoForm.module.scss';
import { useLoginContext } from '@/context/Login';

const MyInfoFormItem = ({
  name,
  placeholder,
  value,
  onChange,
}: TextInputProps) => (
  <section className={styles.container}>
    <label className={styles.label}>{placeholder}</label>
    <div className={styles.input}>
      <TextInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </section>
);

type MyInfo = {
  memberId: string;
  name: string;
  nickname: string;
  email: string;
};

type MyInfoFormProps = {
  form: MyInfo;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MyInfoForm = ({ form, onChange }: MyInfoFormProps) => {
  const { userInfo } = useLoginContext();
  const { memberId, name, nickname, email } = form;
  const { id } = userInfo;

  const { mutate, isLoading, isError, data } = useMutation(
    memberService.update,
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate({ ...form, id });
    },
    [mutate, id, form],
  );

  return (
    <form onSubmit={onSubmit}>
      <MyInfoFormItem
        name="memberId"
        placeholder="ID"
        value={memberId}
        onChange={onChange}
      />
      <MyInfoFormItem
        name="name"
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <MyInfoFormItem
        name="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={onChange}
      />
      <MyInfoFormItem
        name="email"
        placeholder="이메일"
        type="email"
        value={email}
        onChange={onChange}
      />
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
