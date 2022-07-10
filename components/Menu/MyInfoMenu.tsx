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
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        <MyInfoMenuItem href="/mypost" title="내 글 보기" />
      </ul>
      <ul className={styles.menu}>
        <MyInfoMenuItem href="/myinfo" title="내 정보" />
        <MyInfoMenuItem href="/mypassword" title="비밀번호 변경" />
        <MyInfoMenuItem href="/mydelete" title="탈퇴" />
      </ul>
    </div>
  );
};

export default MyInfoMenu;
