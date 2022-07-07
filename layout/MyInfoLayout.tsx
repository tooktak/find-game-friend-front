import { MyInfoForm, MyPictureURLForm } from '@/components/Form';

import { SplitLayout } from '@/components/Layout';
import Main from '@/components/Main';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';

const MyInfoLayout = () => {
  return (
    <Main>
      <SplitLayout
        left={<MyInfoMenu />}
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
