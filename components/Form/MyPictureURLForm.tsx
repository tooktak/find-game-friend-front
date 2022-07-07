import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FileInput } from '@/components/Input';
import styles from './MyPictureURLForm.module.scss';
import { Button } from '../Button';

const MyPictureURLForm = () => {
  const [pictureURL, setPictureURL] = useState('');
  const [memberId, setMemberId] = useState('');

  const onChangePictureURL = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPictureURL(value);
    },
    [],
  );

  useEffect(() => {
    setMemberId('asdfg12345');
  }, []);

  return (
    <form>
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
                onChange={onChangePictureURL}
              />
            </div>
            <Button
              size="large"
              color="main"
              disabled={pictureURL ? false : true}
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
