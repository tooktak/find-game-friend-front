import { SplitLayout } from '@/components/Layout';
import Main from '@/components/Main';
import MyInfoMenu from '@/components/Menu/MyInfoMenu';
import jwtDecode from 'jwt-decode';
import { Button } from '@/components/Button';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { type, userInfo } from 'os';

const MyInfoLayout = () => {
  const jwtToken =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('userInfo')
      : null;
  const decodedToken: { sub?: number } | null = jwtToken
    ? jwtDecode(jwtToken)
    : null;
  const userId = Number(decodedToken?.sub);

  const router = useRouter();

  const removeMemberInfo = () => {
    const isCheck = confirm('정말 탈퇴하시겠습니까?');
    if (isCheck && userId !== undefined) {
      axios
        .delete(
          'http://ec2-43-201-20-164.ap-northeast-2.compute.amazonaws.com:8080/remove/' +
            userId,
        )
        .then(response => {
          router.push('/');
          //성공적으로 데이터 전송
        })
        .catch(error => {
          console.log(error);
          //데이터 전송 실패
        });
    }
  };

  return (
    <Main>
      <SplitLayout
        left={<MyInfoMenu />}
        right={
          <div>
            계정 삭제시 지금껏 작성되었던 글은 모두 삭제됩니다.
            <br />
            계정 삭제를 원하시면 아래 버튼을 눌러주세요
            <br />
            <Button onClick={removeMemberInfo}>계정 탈퇴</Button>
          </div>
        }
      />
    </Main>
  );
};

export default MyInfoLayout;
