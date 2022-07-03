import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useContext, useCallback } from 'react';

import useToggle from '@/hooks/useToggle';
import { Button } from '@/components/Button';
import { LoginContext, LoginContextType } from '@/pages/_app';
import MyMenu from './MyMenu';
import { MyMenuDropdown } from './Dropdown';

const LoginMenu = () => {
  const { isLogin, toggleIsLogin } = useContext(
    LoginContext,
  ) as LoginContextType;
  const [menuOpen, toggleMenuOpen] = useToggle();
  const router = useRouter();

  const handleMenuClose = useCallback(() => {
    if (menuOpen) toggleMenuOpen(false);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) toggleMenuOpen();
  }, [router]);

  const menuItems = [
    {
      title: '내정보',
      href: '/myinfo',
    },
    { title: '로그아웃', href: '/', onClick: toggleIsLogin },
  ];

  return isLogin ? (
    <MyMenuDropdown
      open={menuOpen}
      menuClose={handleMenuClose}
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
