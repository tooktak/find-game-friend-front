import { memo } from 'react';
import Image from 'next/image';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import styles from './MyMenu.module.scss';

const Avatar = memo(() => (
  <Image
    className={styles.avatar}
    alt="avatar"
    src="/test1.png"
    width={32}
    height={32}
    layout="fixed"
  />
));

Avatar.displayName = 'Avatar';

const MyMenu = ({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: () => void;
}) => {
  return (
    <div className={styles.myMenu} onClick={toggleOpen}>
      <Avatar />
      <div className={styles.icon}>
        {open ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
      </div>
    </div>
  );
};

export default MyMenu;
