import { SplitLayout } from '@/components/Layout';
import Main from '@/components/Main';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';

const MyPasswordLayout = () => {
  return (
    <Main>
      <SplitLayout
        left={<MyInfoMenu />}
        right={<div>비밀번호 변경 . . .</div>}
      />
    </Main>
  );
};

export default MyPasswordLayout;
