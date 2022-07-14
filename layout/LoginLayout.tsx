import Link from 'next/link';
import { useMutation } from 'react-query';

import { Layout } from '@/components/Layout';
import { Button } from '@/components/Button';
import { useLoginContext } from '@/context/Login';
import memberService from '@/services/member';

const LoginLayout = () => {
  const { setUserInfoData } = useLoginContext();

  const { mutate, isLoading } = useMutation(memberService.login, {
    onSuccess: data => {
      setUserInfoData(data);
    },
  });

  const onLogin = () => {
    const login = {
      memberId: 'asdfg',
      password: '0000',
    };
    mutate(login);
  };

  return (
    <Layout>
      <Link href="/" passHref>
        <Button onClick={onLogin} disabled={isLoading}>
          {isLoading ? '로그인 중...' : '로그인'}
        </Button>
      </Link>
    </Layout>
  );
};

export default LoginLayout;
