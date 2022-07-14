import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';

import useToggle from '@/hooks/useToggle';
import { Button } from '@/components/Button';
import { useLoginContext } from '@/context/Login';
import MyMenu from './MyMenu';
import { MyMenuDropdown } from './Dropdown';

const LoginMenu = () => {
  const { isLogin, setUserInfoLogout } = useLoginContext();
  const [menuOpen, toggleMenuOpen] = useToggle();
  const router = useRouter();

  const handleMenuClose = useCallback(() => {
    if (menuOpen) toggleMenuOpen(false);
  }, [menuOpen]);

  const onLogout = useCallback(() => {
    setUserInfoLogout();
  }, [setUserInfoLogout]);

  useEffect(() => {
    if (menuOpen) handleMenuClose();
  }, [router]);

  const menuItems = [
    {
      title: '내 글 보기',
      href: '/mypost',
    },
    {
      title: '내 정보',
      href: '/myinfo',
    },
    { title: '로그아웃', href: '/', onClick: onLogout },
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
