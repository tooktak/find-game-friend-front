import Link from 'next/link';
import {useMutation} from 'react-query';

import {Layout} from '@/components/Layout';
import {Button} from '@/components/Button';
import {useLoginContext} from '@/context/Login';
import memberService from '@/services/member';
import {useEffect, useRef} from "react";
import {Http2ServerResponse} from "http2";

const LoginLayout = () => {
  const {setUserInfoData} = useLoginContext();

  const {mutate, isLoading} = useMutation(memberService.login, {
    onSuccess: data => {
      setUserInfoData(data);
    },
  });

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
  const onGoogleSignIn = (res) => {
    console.log(res);
    const login = {
      memberId: 'asdfg',
      password: '0000',
    };
    mutate(login);
  };

  useScript('https://accounts.google.com/gsi/client', () => {
    window.google.accounts.id.initialize({
      client_id: "1033931690858-58kuqhjo9877bcnod4og9jg1av9cusk1.apps.googleusercontent.com",
      callback: onGoogleSignIn,
    });
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      width: '250',
      type: 'icon',
      shape: 'circle',
    });
  });

  return (
    <Layout>
      <div id="google-login-api" ref={googleSignInButton}></div>
    </Layout>
  );
};

export default LoginLayout;
