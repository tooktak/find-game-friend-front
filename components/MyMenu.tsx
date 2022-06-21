import { memo } from 'react';
import Image from 'next/image';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import useToggle from '@/hooks/useToggle';
import styles from './MyMenu.module.scss';

const Avatar = memo(() => (
  <Image
    className={styles.avatar}
    alt="avatar"
    src="/test.jpg"
    width={32}
    height={32}
    layout="fixed"
  />
));

Avatar.displayName = 'Avatar';

const MyMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useToggle();

  return (
    <div className={styles.myMenu} onClick={setIsMenuOpen}>
      <Avatar />
      <div className={styles.icon}>
        {isMenuOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
      </div>
    </div>
  );
};

export default MyMenu;
