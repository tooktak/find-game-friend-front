import Link from 'next/link';
import { useContext } from 'react';
import { useMutation } from 'react-query';

import { Layout } from '@/components/Layout';
import { Button } from '@/components/Button';
import { LoginContext, LoginContextType } from '@/pages/_app';
import memberService from '@/services/member';

const LoginLayout = () => {
  const { toggleIsLogin, setUserInfo } = useContext(
    LoginContext,
  ) as LoginContextType;

  const { mutate, isLoading } = useMutation(memberService.login, {
    onSuccess: data => {
      toggleIsLogin(true);
      setUserInfo(data);
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
