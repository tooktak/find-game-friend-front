import { SplitLayout } from '@/components/Layout';
import Main from '@/components/Main';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';

const MyInfoLayout = () => {
  return (
    <Main>
      <SplitLayout left={<MyInfoMenu />} right={<div>계정 삭제 . . .</div>} />
    </Main>
  );
};

export default MyInfoLayout;
