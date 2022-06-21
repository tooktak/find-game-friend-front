import Link from 'next/link';
import useToggle from '@/hooks/useToggle';
import Button from '@/components/Button';
import MyMenu from './MyMenu';

const HeaderRight = () => {
  const [isLogin, setIsLogin] = useToggle();

  return isLogin ? (
    <MyMenu />
  ) : (
    <Link href="/login" passHref>
      <a>
        <Button color="main" onClick={setIsLogin}>
          login
        </Button>
      </a>
    </Link>
  );
};

export default HeaderRight;
