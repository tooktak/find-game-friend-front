import { Layout } from '@/components/Layout';
import { useLoginContext } from '@/context/Login';
import memberService from '@/services/member';
import { useEffect, useRef } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

const LoginLayout = () => {
  const { setUserInfoData } = useLoginContext();
  const router = useRouter();
  const { mutate, isLoading } = useMutation(
    memberService.google_oauth_callback,
    {
      onSuccess: data => {
        setUserInfoData({ sub: data });
      },
    },
  );

  const useScript = (url: unknown, onload: unknown) => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = onload;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }, [url, onload]);
  };

  const googleSignInButton = useRef(null);
  const onGoogleSignIn = async res => {
    //const test = res.credential;
    //const response = await memberService.google_oauth_callback(test);
    mutate(res.credential);
    router.push('/', undefined, { shallow: true });
    // 여기에 리턴값 확인 한뒤 맴버 정보 및 localstorge에 관련값 저장.
  };

  useScript('https://accounts.google.com/gsi/client', () => {
    window.google.accounts.id.initialize({
      client_id:
        '1033931690858-58kuqhjo9877bcnod4og9jg1av9cusk1.apps.googleusercontent.com',
      callback: onGoogleSignIn,
    });
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      width: '250',
      shape: 'square',
    });
  });

  return (
    <Layout>
      <div id="google-login-api" ref={googleSignInButton}></div>
    </Layout>
  );
};

export default LoginLayout;
