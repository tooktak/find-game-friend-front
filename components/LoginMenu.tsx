import Link from 'next/link';
import useToggle from '@/hooks/useToggle';
import { Button } from '@/components/Button';
import MyMenu from './MyMenu';
import { MyMenuDropdown } from './Dropdown';
import { useContext } from 'react';
import { LoginContext, LoginContextType } from '@/pages/_app';

const LoginMenu = () => {
  const { isLogin, toggleIsLogin } = useContext(
    LoginContext,
  ) as LoginContextType;
  const [menuOpen, toggleMenuOpen] = useToggle();

  const onLogout = () => {
    toggleIsLogin();
    toggleMenuOpen();
  };

  const menuItems = [
    {
      title: '내정보',
      href: '/myinfo',
      onClick: toggleMenuOpen,
    },
    { title: '로그아웃', href: '/', onClick: onLogout },
  ];

  return isLogin ? (
    <MyMenuDropdown
      open={menuOpen}
      trigger={<MyMenu open={menuOpen} toggleOpen={toggleMenuOpen} />}
      menuItems={menuItems}
    />
  ) : (
    <Link href="/login" passHref>
      <Button color="main">login</Button>
    </Link>
  );
};

export default LoginMenu;
