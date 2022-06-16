import { useCallback, useState } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

const HeaderRight = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleLogout = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  return (
    <>
      {isLogin ? (
        <Link href="/" passHref>
          <a>
            <Button color="sub" onClick={handleLogout}>
              logout
            </Button>
          </a>
        </Link>
      ) : (
        <Link href="/login" passHref>
          <a>
            <Button color="main" onClick={handleLogout}>
              login
            </Button>
          </a>
        </Link>
      )}
    </>
  );
};

export default HeaderRight;
