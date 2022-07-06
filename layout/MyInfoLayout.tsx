import MyInfoForm from '@/components/Form/MyInfoForm';

import { SplitLayout } from '@/components/Layout';
import Main from '@/components/Main';

const MyInfoLayout = () => {
  return (
    <Main>
      <SplitLayout
        left={
          <>
            <ul>
              <li>내 정보</li>
              <li>내 글 보기</li>
              <li>탈퇴</li>
            </ul>
          </>
        }
        right={
          <>
            <MyInfoForm />
          </>
        }
      />
    </Main>
  );
};

export default MyInfoLayout;
