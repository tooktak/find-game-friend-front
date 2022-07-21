import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { useLoginContext } from '@/context/Login';
import useFormChange from '@/hooks/useFormChange';
import memberService from '@/services/member';
import { QueryKeys } from '@/libs/client';

import Main from '@/components/Main';
import { SplitLayout } from '@/components/Layout';
import { MyInfoForm, MyPictureURLForm } from '@/components/Form';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';

const MyInfoLayout = () => {
  const { userInfo } = useLoginContext();
  const [memberId, setMemberId] = useState('');
  const [pictureURL, setPictureURL] = useState('');
  const [form, onChange, setForm] = useFormChange({
    memberId: '',
    password: '',
    name: '',
    nickname: '',
    email: '',
  });

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
      const { memberId } = data;
      setForm({ ...data, password: '' });
      setMemberId(memberId);
    }
  }, [data, setForm]);

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
            <MyInfoForm form={form} onChange={onChange} />
          </>
        }
      />
    </Main>
  );
};

export default MyInfoLayout;
