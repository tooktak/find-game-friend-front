import Image from 'next/image';
import { ChangeEvent, FormEvent, useCallback } from 'react';
import { useMutation } from 'react-query';

import { useLoginContext } from '@/context/Login';
import { FileInput } from '@/components/Input';
import { Button } from '@/components/Button';
import memberService from '@/services/member';

import styles from './MyPictureURLForm.module.scss';

type MyPictureURLFormProps = {
  memberId: string;
  pictureURL: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MyPictureURLForm = ({
  memberId,
  pictureURL,
  onChange,
}: MyPictureURLFormProps) => {
  const { userInfo } = useLoginContext();
  const { id } = userInfo;

  const { mutate, isLoading } = useMutation(memberService.updatePicture, {
    onSuccess: data => {
      console.log(data);
    },
  });

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate({ id, pictureURL });
    },
    [mutate, id, pictureURL],
  );

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            alt="avatar"
            src="/test.jpg"
            width={100}
            height={100}
            layout="fixed"
          />
        </div>
        <div className={styles.form}>
          <h1 className={styles.title}>{memberId}</h1>
          <div className={styles.wrapper}>
            <div className={styles.input}>
              <FileInput
                name="pictureURL"
                label="사진 바꾸기"
                value={pictureURL}
                onChange={onChange}
              />
            </div>
            <Button
              size="large"
              color="main"
              disabled={pictureURL || isLoading ? false : true}
            >
              수정
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MyPictureURLForm;
