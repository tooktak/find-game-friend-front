import { SplitLayout } from '@/components/Layout';
import Main from '@/components/Main';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';

const MyPostLayout = () => {
  return (
    <Main>
      <SplitLayout left={<MyInfoMenu />} right={<div>내 글 목록 . . .</div>} />
    </Main>
  );
};

export default MyPostLayout;
