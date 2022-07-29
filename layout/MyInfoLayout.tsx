import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { useLoginContext } from '@/context/Login';
import memberService from '@/services/member';
import { QueryKeys } from '@/libs/client';

import Main from '@/components/Main';
import { SplitLayout } from '@/components/Layout';
import { MyInfoForm, MyPictureURLForm } from '@/components/Form';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';
import { useForm } from 'react-hook-form';

const MyInfoLayout = () => {
  const { userInfo } = useLoginContext();
  const [memberId, setMemberId] = useState('');
  const [pictureURL, setPictureURL] = useState('');
  const { register, handleSubmit, setValue } = useForm<MyInfo>();

  const { id } = userInfo;
  const { data } = useQuery<Member, AxiosError>(QueryKeys.MEMBER, () =>
    memberService.findById(id),
  );

  const onPictureURLChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPictureURL(value);
    },
    [],
  );

  useEffect(() => {
    if (data) {
      setValue('memberId', data.memberId);
      setValue('name', data.name);
      setValue('nickname', data.nickname);
      setValue('email', data.email);
      setMemberId(data.memberId);
    }
  }, [data, setValue]);

  return (
    <Main>
      <SplitLayout
        left={<MyInfoMenu />}
        right={
          <>
            <MyPictureURLForm
              memberId={memberId}
              pictureURL={pictureURL}
              onChange={onPictureURLChange}
            />
            <MyInfoForm register={register} handleSubmit={handleSubmit} />
          </>
        }
      />
    </Main>
  );
};

export default MyInfoLayout;
