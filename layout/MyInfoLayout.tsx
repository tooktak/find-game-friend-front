import { MyInfoForm, MyPictureURLForm } from '@/components/Form';

import { SplitLayout } from '@/components/Layout';
import Main from '@/components/Main';
import Link from 'next/link';

const MyInfoLayout = () => {
  return (
    <Main>
      <SplitLayout
        left={
          <>
            <ul>
              <li>
                <Link href="myinfo">내 정보</Link>
              </li>
              <li>
                <Link href="mypost">내 글 보기</Link>
              </li>
              <li>
                <Link href="delete">탈퇴</Link>
              </li>
            </ul>
          </>
        }
        right={
          <>
            <MyPictureURLForm />
            <MyInfoForm />
          </>
        }
      />
    </Main>
  );
};

export default MyInfoLayout;
