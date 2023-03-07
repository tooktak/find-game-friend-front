import Link from 'next/link';
import { useMutation } from 'react-query';

import { Layout } from '@/components/Layout';
import { Button } from '@/components/Button';
import { useLoginContext } from '@/context/Login';
import memberService from '@/services/member';
import GoogleLogin from "@leecheuk/react-google-login";

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
      <GoogleLogin clientId='1033931690858-58kuqhjo9877bcnod4og9jg1av9cusk1.apps.googleusercontent.com'>
        Google
        <ul>
          <li id="GgCustomLogin">
            <a href="javascript:void(0)">
              <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </a>
          </li>
        </ul>
      </GoogleLogin>
    </Layout>
  );
};

export default LoginLayout;
