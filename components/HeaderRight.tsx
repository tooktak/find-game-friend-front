import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button';

const HeaderRight = () => {
  const [isLogin] = useState<boolean>(false);
  const router = useRouter();

  const onLogin = useCallback(() => {
    router.push('/login');
  }, [router]);

  return (
    <>
      {isLogin ? (
        <Button color="sub" onClick={onLogin}>
          logout
        </Button>
      ) : (
        <Button color="main" onClick={onLogin}>
          login
        </Button>
      )}
    </>
  );
};

export default HeaderRight;
