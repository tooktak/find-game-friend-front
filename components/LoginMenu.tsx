import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';

import useToggle from '@/hooks/useToggle';
import { Button } from '@/components/Button';
import { useLoginContext } from '@/context/Login';
import MyMenu from './MyMenu';
import { MyMenuDropdown } from './Dropdown';
import axios from 'axios';
import fetcher from '@/libs/fetcher';

const LoginMenu = () => {
  const { isLogin, setUserInfoLogout } = useLoginContext();
  const [menuOpen, toggleMenuOpen] = useToggle();
  const router = useRouter();

  const handleMenuClose = useCallback(() => {
    if (menuOpen) toggleMenuOpen(false);
  }, [menuOpen, toggleMenuOpen]);

  const onLogout = useCallback(() => {
    setUserInfoLogout();
    axios
      .get('http://localhost:8080/sign-out', { withCredentials: true })
      .then(response => {
        router.push('/');
        // 성공적으로 데이터를 전송한 경우 실행할 코드를 작성합니다.
      })
      .catch(error => {
        console.log(error);
        // 데이터 전송에 실패한 경우 실행할 코드를 작성합니다.
      });
  }, [setUserInfoLogout]);

  useEffect(() => {
    toggleMenuOpen(false);
  }, [router, toggleMenuOpen]);

  const menuItems = [
    {
      title: '내 글 보기',
      href: '/mypost',
    },
    /*{
      title: '내 정보',
      href: '/myinfo',
    },*/
    { title: '로그아웃', href: '/', onClick: onLogout },
  ];

  return isLogin ? (
    <>
      <Link href="/write" passHref>
        <Button rounded outline color="main">
          글쓰기
        </Button>
      </Link>
      <MyMenuDropdown
        open={menuOpen}
        menuClose={handleMenuClose}
        trigger={<MyMenu open={menuOpen} toggleOpen={toggleMenuOpen} />}
        menuItems={menuItems}
      />
    </>
  ) : (
    <Link href="/login" passHref>
      <Button rounded color="main">
        로그인
      </Button>
    </Link>
  );
};

export default LoginMenu;
