import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MyInfoMenu.module.scss';

type MyInfoMenuItemProps = {
  href: string;
  title: string;
};

const MyInfoMenuItem = ({ href, title }: MyInfoMenuItemProps) => {
  const { pathname } = useRouter();
  return (
    <li className={pathname === href ? styles.active : ''}>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const MyInfoMenu = () => {
  const menu = [
    {
      href: '/myinfo',
      title: '내 정보',
    },
    {
      href: '/mypost',
      title: '내 글 보기',
    },
    {
      href: '/mydelete',
      title: '탈퇴',
    },
  ];

  return (
    <ul className={styles.menu}>
      {menu.map(({ href, title }) => (
        <MyInfoMenuItem key={href} href={href} title={title} />
      ))}
    </ul>
  );
};

export default MyInfoMenu;
