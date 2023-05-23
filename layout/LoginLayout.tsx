import { Layout } from '@/components/Layout';
import { useLoginContext } from '@/context/Login';
import memberService from '@/services/member';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

const LoginLayout = () => {
  const { setUserInfoData } = useLoginContext();
  const router = useRouter();
  const googleSignInButton = useRef(null);

  const onGoogleSignIn = async res => {
    try {
      const { credential } = res;
      await memberService.google_oauth_callback(credential);
      router.push('/', undefined, { shallow: true });
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id:
          '1033931690858-58kuqhjo9877bcnod4og9jg1av9cusk1.apps.googleusercontent.com',
        callback: onGoogleSignIn,
      });
      window.google.accounts.id.renderButton(googleSignInButton.current, {
        width: '250',
        shape: 'square',
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div id="google-login-api" ref={googleSignInButton}></div>
    </Layout>
  );
};

export default LoginLayout;
