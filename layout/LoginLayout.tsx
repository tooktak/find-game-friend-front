import Link from 'next/link';
import { useContext } from 'react';
import { Button } from '@/components/Button';
import { LoginContext, LoginContextType } from '@/pages/_app';
import { Layout } from '@/components/Layout';

const LoginLayout = () => {
  const { toggleIsLogin } = useContext(LoginContext) as LoginContextType;
  return (
    <Layout>
      <Link href="/" passHref>
        <Button onClick={toggleIsLogin}>로그인</Button>
      </Link>
    </Layout>
  );
};

export default LoginLayout;
